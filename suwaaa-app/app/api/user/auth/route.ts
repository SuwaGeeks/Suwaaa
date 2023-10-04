import { NextResponse } from 'next/server'
import { StartAffiliationAuth } from '@/app/api/utils/AffiliationAuth'
import { checkToken } from '@/app/api/utils/jwt'
import dayjs from 'dayjs'

export async function POST(req: Request) {
    const email = String(await checkToken(String(req.headers.get('token'))))
    const { schoolId } = await req.json()

    const res = await StartAffiliationAuth(email, schoolId)
    
    return res === "success" ?
        NextResponse.json(
            {
                type: "ed.sus",
                exp: dayjs().add(60, 'M')
            }
        ) :
        NextResponse.json(
            {
                status: "Error"
            },
            {
                status: 400
            }
        )
}
