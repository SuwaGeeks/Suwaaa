import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type getBenefitsResponse = {
  count: number;
  benefits: Array<{
    id: number;
    title: string;
    target: string;
    detail: string;
    term: string;
    isValid: boolean;
  }>;
};
type Props = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, props: Props) {
  const benefits = await prisma.benefits.findMany({
    where: {
      shopId: Number(props.params.id),
    },
  });
  const res: getBenefitsResponse = {
    count: benefits.length,
    benefits: benefits,
  };
  return NextResponse.json(res);
}
