import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { checkToken } from '@/app/api/utils/jwt';

const prisma = new PrismaClient();

type Props = {
  params: {
    benefitId: string;
  };
};

export async function POST(req: Request, props: Props) {
  const email = String(
    await checkToken(String(req.headers.get('token')))
  );

  const benefit = await prisma.benefits.findUnique({
    where: {
      id: Number(props.params.benefitId),
    },
  });

  if (!benefit) {
    return NextResponse.json(
      {
        status: 'Error',
        message: 'NotFound',
      },
      {
        status: 404,
      }
    );
  }

  if (!benefit.isValid) {
    return NextResponse.json(
      {
        status: 'Error',
        message: 'Expiration date has expired',
      },
      {
        status: 403,
      }
    );
  }

  const history = await prisma.benefitHistory.create({
    data: {
      email: email,
      benefitId: Number(props.params.benefitId),
    },
    include: {
      benefit: true,
    },
  });

  return NextResponse.json(
    {
      date: history.createdAt,
      email: history.benefit.shopId,
      benefitId: history.benefitId,
    },
    {
      status: 201,
    }
  );
}
