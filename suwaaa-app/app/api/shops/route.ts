import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type getShopsResponse = {
  count: number;
  shops: Array<{
    id: number;
    name: string;
    address: string;
    phone: string;
    openingHours: string;
    holiday: string;
    url: string;
    genreId: number;
    menuAbout: string;
    message: string;
    mapUrl: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
};

export async function GET() {
  const shops = await prisma.shops.findMany();
  const res: getShopsResponse = {
    count: shops.length,
    shops: shops,
  };
  return NextResponse.json(res);
}
