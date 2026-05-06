import { notFound } from 'next/navigation';

import LoanProductDetailsScreen from '@/components/loan-products/LoanProductDetailsScreen';

import { LOAN_PRODUCTS } from '@/constant/loanProducts';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({
  params,
}: Props) {
  const { id } = await params;

  const product = LOAN_PRODUCTS.find(
    (item) => item.id === id
  );

  if (!product) {
    notFound();
  }

  return (
    <LoanProductDetailsScreen
      product={product}
    />
  );
}