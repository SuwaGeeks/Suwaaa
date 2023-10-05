import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const cUser = await prisma.users.count({
    where: {
      email: email,
    },
  });

  if (cUser) {
    return NextResponse.json(
      {
        status: 'Error',
      },
      {
        status: 400,
      }
    );
  }

  const user = await prisma.users.create({
    data: { email, password, schoolId: '' },
  });

  return NextResponse.json(
    {
      user: {
        email: user.email,
        schoolId: user.schoolId,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    },
    {
      status: 201,
    }
  );
}
