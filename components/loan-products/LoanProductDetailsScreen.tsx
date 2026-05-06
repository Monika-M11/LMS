'use client';

import { useRouter } from 'next/navigation';

interface Props {
  product: {
    id: string;
    name: string;
    interestRate: string;
    maxAmount: string;
    tenure: string;
    processingFee: string;
    eligibility: string;
    emiExample: string;
    terms: string;
  };
}

export default function LoanProductDetailsScreen({
  product,
}: Props) {
  const router = useRouter();

  return (
    <div className="max-w-5xl">
      {/* HEADER */}
      <div className="bg-white rounded-[32px] p-8 border border-[#E9EDF5] shadow-sm">
        <div className="flex items-start justify-between flex-wrap gap-5">
          <div>
            <div
              className="
                w-20
                h-20
                rounded-3xl
                bg-[#EEF2FF]
                flex
                items-center
                justify-center
                text-4xl
              "
            >
              💰
            </div>

            <h1 className="text-[38px] font-bold text-[#111827] mt-6">
              {product.name}
            </h1>

            <p className="text-gray-500 mt-2">
              Complete loan scheme information
            </p>
          </div>

          <button
            className="
              h-[56px]
              px-8
              rounded-2xl
              bg-[#5561D7]
              text-white
              font-semibold
              hover:opacity-90
              transition-all
            "
            onClick={() => router.push('/apply')}
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* DETAILS */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {/* LEFT */}
        <div className="space-y-6">
          <div className="bg-white rounded-[28px] p-6 border border-[#E9EDF5]">
            <h2 className="text-lg font-semibold text-[#111827] mb-5">
              Loan Information
            </h2>

            <div className="space-y-5">
              <div>
                <p className="text-sm text-gray-500">
                  Interest Rate
                </p>

                <p className="text-2xl font-bold text-[#5561D7] mt-1">
                  {product.interestRate}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Maximum Amount
                </p>

                <p className="font-semibold text-[#111827] mt-1">
                  {product.maxAmount}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Tenure
                </p>

                <p className="font-semibold text-[#111827] mt-1">
                  {product.tenure}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Processing Fee
                </p>

                <p className="font-semibold text-[#111827] mt-1">
                  {product.processingFee}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-6 border border-[#E9EDF5]">
            <h2 className="text-lg font-semibold text-[#111827] mb-4">
              EMI Example
            </h2>

            <p className="text-[#111827] leading-7">
              {product.emiExample}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <div className="bg-white rounded-[28px] p-6 border border-[#E9EDF5]">
            <h2 className="text-lg font-semibold text-[#111827] mb-4">
              Eligibility
            </h2>

            <p className="text-gray-600 leading-7">
              {product.eligibility}
            </p>
          </div>

          <div className="bg-white rounded-[28px] p-6 border border-[#E9EDF5]">
            <h2 className="text-lg font-semibold text-[#111827] mb-4">
              Terms & Conditions
            </h2>

            <p className="text-gray-600 leading-7">
              {product.terms}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}