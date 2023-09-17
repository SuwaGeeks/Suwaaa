import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { checkToken } from '@/app/api/utils/jwt'

export const config = {
    matcher: [
        '/api/user/:path*',
        '/api/like/:path*',
        '/api/shops/:shopid/benefit',
        '/api/benefit/:id/use',
        '/api/benefit/history',
    ]
}

export async function middleware(req: NextRequest) {
    const token = req.headers.get('token')
    if (token && await checkToken(token)) {
        return NextResponse.next()
    } else {
        return NextResponse.json(
            {
                status: "Error",
                message: "Required Authorization"
            },
            {
                status: 401
            }
        )
    }
}
