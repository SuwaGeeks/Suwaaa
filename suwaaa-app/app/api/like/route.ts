import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { checkToken } from '../utils/jwt';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const email = String(
    await checkToken(String(req.headers.get('token')))
  );

  const likes = await prisma.likes.findMany({
    where: {
      email: email,
    },
    include: {
      shop: true,
    },
  });

  const res = {
    count: likes.length,
    shops: likes.map((like) => like.shop),
  };
  return NextResponse.json(res);
}
