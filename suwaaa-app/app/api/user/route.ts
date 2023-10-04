import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { checkToken } from '@/app/api/utils/jwt'

const prisma = new PrismaClient()

export async function GET(req: Request) {
    const email = String(await checkToken(String(req.headers.get('token'))))

    const user = await prisma.users.findFirst({
        where: {
            email
        }
    })

    return user ? 
        NextResponse.json({
            user: {
                email: user.email,
                schoolId: user.schoolId,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            }
        }) :
        NextResponse.json(
            {
                status: "Error",
                message: "NotFound"
            },
            {
                status: 404
            }
        )
}
