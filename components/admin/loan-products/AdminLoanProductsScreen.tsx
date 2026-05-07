"use client";

import { useState } from "react";

import LoanProductForm from "./LoanProductForm";

export default function AdminLoanProductsScreen() {
  const [products, setProducts] = useState<any[]>(
    []
  );

  const handleAddProduct = (data: any) => {
    setProducts((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...data,
      },
    ]);
  };

  return (
    <div>
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-[34px] font-bold text-[#111827]">
          Loan Products
        </h1>

        <p className="text-gray-500 mt-2">
          Create and manage loan schemes
        </p>
      </div>

      {/* FORM */}
      <LoanProductForm
        onSubmit={handleAddProduct}
      />

      {/* PRODUCT LIST */}
      <div className="mt-10 bg-white rounded-[28px] border border-[#E9EDF5] shadow-sm">
        <div className="p-6 border-b border-[#EEF2F7]">
          <h2 className="text-lg font-semibold text-[#111827]">
            Created Products
          </h2>
        </div>

        {products.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
            No loan products created
          </div>
        ) : (
          <div className="divide-y divide-[#EEF2F7]">
            {products.map((item) => (
              <div
                key={item.id}
                className="p-6 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold text-[#111827]">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.interestRate}% Interest • ₹
                    {item.maxAmount}
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full text-xs bg-[#EEF2FF] text-[#4F46E5]">
                  Active
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}