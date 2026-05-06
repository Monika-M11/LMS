

import { LOAN_PRODUCTS } from '@/constant/loanProducts';

import LoanProductCard from './LoanProductCard';

export default function LoanProductsScreen() {
  return (
    <div>
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-[34px] font-bold text-[#111827]">
          Loan Products
        </h1>

        <p className="text-gray-500 mt-2">
          Explore all available loan schemes
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {LOAN_PRODUCTS.map((product) => (
          <LoanProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}