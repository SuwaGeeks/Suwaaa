import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { checkToken } from '../../utils/jwt'

const prisma = new PrismaClient()

type Props = {
    params: {
        shopId: string
    }
}

export async function GET(req: Request, props: Props) {
    const email = String(await checkToken(String(req.headers.get('token'))))
    
    const isLike = await prisma.likes.findUnique({
        where: {
            like_id: {
                email: email,
                shopId: Number(props.params.shopId)
            }
        }
    })

    const isShop = await prisma.shops.count({
        where: {
            id: Number(props.params.shopId)
        }
    })

    return isShop ?
        NextResponse.json(
            {
                id: props.params.shopId,
                isLike: !!isLike
            }
        ) :
        NextResponse.json(
            {
                status: "Error",
                message: "NotFound"
            }, {
                status: 404
            }
        )
}


export async function POST(req: Request, props: Props) {
    const email = String(await checkToken(String(req.headers.get('token'))))
    
    const like = await prisma.likes.findUnique({
        where: {
            like_id: {
                email: email,
                shopId: Number(props.params.shopId)
            }
        }
    })

    const isShop = await prisma.shops.count({
        where: {
            id: Number(props.params.shopId)
        }
    })

    if (!isShop) {
        return NextResponse.json(
            {
                status: "Error",
                message: "NotFound"
            }, {
                status: 404
            }
        )
    }

    if (like) {
        await prisma.likes.delete({
            where: {
                like_id: {
                    email: email,
                    shopId: Number(props.params.shopId)
                }
            }
        })

        return NextResponse.json({
            id: props.params.shopId,
            isLike: false
        })
    } else {
        await prisma.likes.create({
            data: {
                email: email,
                shopId: Number(props.params.shopId)
            }
        })

        return NextResponse.json({
            id: props.params.shopId,
            isLike: true
        })
    }
}