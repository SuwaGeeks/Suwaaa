import { NextResponse } from 'next/server'
import { CheckAffiliationAuth } from '@/app/api/utils/AffiliationAuth'

type Props = {
    params: {
        id: string
    }
}

export async function GET(req: Request, props: Props) {
    const res = await CheckAffiliationAuth(props.params.id)
    
    if (res === "success") {
        return NextResponse.json(
            {
                type: "ed.sus",
                status: "OK"
            }
        )
    } else if (res === "done") {
        return NextResponse.json(
            {
                status: "Error"
            },
            {
                status: 403
            }
        )
    } else if (res === "NotFound") {
        return NextResponse.json(
            {
                status: "Error"
            },
            {
                status: 400
            }
        )
    }
}
