'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getLoanProduct } from '@/src/lib/api';

export default function LoanProductDetailsScreen() {
  const router = useRouter();
  const params = useParams();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const id = params?.id as string;

useEffect(() => {
  fetchProduct();
}, [params.id]);

const fetchProduct = async () => {
  try {
    const data = await getLoanProduct(params.id as string);

    console.log("API RESPONSE:", data);

    const product =
      data?.product ||
      data?.data?.product ||
      null;

    setProduct(product);
  } catch (error) {
    console.log(error);
    setProduct(null);
  } finally {
    setLoading(false);
  }
};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-5xl">

      {/* HEADER */}
      <div className="bg-white rounded-[32px] p-8 border border-[#E9EDF5] shadow-sm">

        <div className="flex items-start justify-between flex-wrap gap-5">

          <div>
            <div className="w-20 h-20 rounded-3xl bg-[#EEF2FF] flex items-center justify-center text-4xl">
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
            className="h-[56px] px-8 rounded-2xl bg-[#5561D7] text-white font-semibold"
            onClick={() =>
              router.push(`/dashboard/eligibility/${product.id}`)
            }
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
                <p className="text-sm text-gray-500">Interest Rate</p>
                <p className="text-2xl font-bold text-[#5561D7] mt-1">
                  {product.interest_rate}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Maximum Amount</p>
                <p className="font-semibold text-[#111827] mt-1">
                  {product.max_amount}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Tenure</p>
                <p className="font-semibold text-[#111827] mt-1">
                  {product.tenure}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Processing Fee</p>
                <p className="font-semibold text-[#111827] mt-1">
                  {product.processing_fee}
                </p>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-[28px] p-6 border border-[#E9EDF5]">

            <h2 className="text-lg font-semibold text-[#111827] mb-4">
              EMI Example
            </h2>

            <p className="text-[#111827] leading-7">
              {product.emi_example}
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