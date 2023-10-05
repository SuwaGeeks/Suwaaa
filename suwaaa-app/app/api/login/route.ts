import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { createToken } from '../utils/jwt';
import dayjs from 'dayjs';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const cUser = await prisma.users.count({
    where: { email, password },
  });

  if (!cUser) {
    return NextResponse.json(
      {
        status: 'Error',
        message: 'Credentials are different',
      },
      {
        status: 403,
      }
    );
  }

  const token = await createToken(email);

  return NextResponse.json({
    token,
    exp: dayjs().add(30, 'day').toISOString(),
  });
}
