import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { checkToken } from '../../utils/jwt'

const prisma = new PrismaClient()

export async function GET(req: Request) {
    const email = String(await checkToken(String(req.headers.get('token'))))

    const historys = await prisma.benefitHistory.findMany({
        where: {
            email: email
        },
        include: {
            benefit: true
        }
    })

    return NextResponse.json({
        count: historys.length,
        historys: historys.map((h) => {
            return {
                date: h.createdAt,
                shopId: h.benefit.shopId,
                benefitId: h.benefitId
            }
        })
    })
}
