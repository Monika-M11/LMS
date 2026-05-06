'use client';

import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
  product: {
    id: string;
    name: string;
    interestRate: string;
    maxAmount: string;
    tenure: string;
  };
}

export default function LoanProductCard({
  product,
}: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() =>
        router.push(`/dashboard/loan-products/${product.id}`)
      }
      className="
        bg-white
        rounded-[28px]
        p-6
        border
        border-[#E9EDF5]
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
        cursor-pointer
        group
      "
    >
      {/* TOP */}
      <div className="flex items-start justify-between">
        <div>
          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-[#EEF2FF]
              flex
              items-center
              justify-center
              text-2xl
            "
          >
            💰
          </div>

          <h2 className="text-[22px] font-bold text-[#111827] mt-5">
            {product.name}
          </h2>
        </div>

        <div
          className="
            w-11
            h-11
            rounded-2xl
            bg-[#F5F7FB]
            flex
            items-center
            justify-center
            group-hover:bg-[#5561D7]
            transition-all
          "
        >
          <ArrowRight
            size={20}
            className="
              text-[#5561D7]
              group-hover:text-white
            "
          />
        </div>
      </div>

      {/* INFO */}
      <div className="mt-8 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">
            Interest Rate
          </span>

          <span className="font-semibold text-[#111827]">
            {product.interestRate}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">
            Max Amount
          </span>

          <span className="font-semibold text-[#111827]">
            {product.maxAmount}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">
            Tenure
          </span>

          <span className="font-semibold text-[#111827]">
            {product.tenure}
          </span>
        </div>
      </div>
    </div>
  );
}