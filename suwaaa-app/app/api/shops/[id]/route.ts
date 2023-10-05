import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Props = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, params: Props) {
  console.log(params);

  const shop = await prisma.shops.findFirst({
    where: {
      id: Number(params.params.id),
    },
  });

  if (shop) {
    return NextResponse.json(shop);
  } else {
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
}
