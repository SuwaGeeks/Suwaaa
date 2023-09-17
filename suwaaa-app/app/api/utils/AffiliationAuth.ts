import { createTransport } from 'nodemailer'
import { PrismaClient } from '@prisma/client'
require('dotenv').config()

const prisma = new PrismaClient()
const transporter = createTransport({
    host: "email-smtp.ap-northeast-1.amazonaws.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
})

const SendAffiliationAuth = async (email: string, token: string) => {
    await transporter.sendMail({
        from: '"Suwaaa" <auth@suwaaa.net>',
        to: email,
        subject: "[Suwaaa] 所属確認メール",
        text: `所属を認証するにはこちらをクリックしてください https://suwaaa.net/affiliation/${token}`,
        html: `
            <p>Suwaaaをご利用いただきありがとうございます。</p>
            <p>
                「公立諏訪東京理科大学」の所属認証をするには
                <a href="https://suwaaa.net/affiliation/${token}">こちら</a>をクリックしてください
            </p>
        `
    })
}

const StartAffiliationAuth = async (email: string, schoolId: string) => {
    const isAuthed = await prisma.auth.count({
        where: {
            schoolId: schoolId,
            isValid: true
        }
    })

    if (isAuthed) {
        return "done"
    }

    const auth = await prisma.auth.create({
        data: {
            email: email,
            schoolId: schoolId
        }
    })

    await SendAffiliationAuth(`${auth.schoolId}@ed.sus.ac.jp`, auth.token)

    return "success"
}

const CheckAffiliationAuth = async (token: string): Promise<string> => {
    const isAuth = await prisma.auth.findFirst({
        where: {
            token: token
        }
    })

    if (!isAuth) {
        return "NotFound"
    } else if (isAuth.isValid) {
        return "done"
    }

    await prisma.auth.update({
        where: {
            email: isAuth.email,
            token: token,
            isValid: false
        },
        data: {
            isValid: true
        }
    })
    await prisma.auth.deleteMany({
        where: {
            schoolId: isAuth.schoolId,
            isValid: false
        }
    })
    await prisma.auth.deleteMany({
        where: {
            email: isAuth.email,
            isValid: false
        }
    })

    return "success"
}

export {
    StartAffiliationAuth,
    SendAffiliationAuth,
    CheckAffiliationAuth
}
