import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Props = {
    params: {
        benefitId: string
    }
}

export async function GET(request: Request, props: Props) {
    const benefit = await prisma.benefits.findFirst({
        where: {
            id: Number(props.params.benefitId)
        }
    })

    if (benefit) {
        return NextResponse.json(benefit)
    } else {
        return NextResponse.json(
            {
                status: 'Error',
                message: 'NotFound'
            },
            {
                status: 404
            }
        )
    }
}
