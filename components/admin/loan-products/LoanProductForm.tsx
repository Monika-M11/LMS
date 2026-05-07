"use client";

import { useState } from "react";

interface Props {
  onSubmit: (data: any) => void;
}

export default function LoanProductForm({
  onSubmit,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    interestRate: "",
    maxAmount: "",
    tenure: "",
    processingFee: "",
    eligibility: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onSubmit(form);

    setForm({
      name: "",
      interestRate: "",
      maxAmount: "",
      tenure: "",
      processingFee: "",
      eligibility: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[28px] border border-[#E9EDF5] shadow-sm p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* NAME */}
        <div>
          <label className="text-sm font-medium text-[#111827]">
            Product Name
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Gold Loan"
            className="w-full mt-2 h-[52px] rounded-2xl border border-[#DDE3EC] px-4 outline-none focus:border-[#232B5D]"
            required
          />
        </div>

        {/* INTEREST */}
        <div>
          <label className="text-sm font-medium text-[#111827]">
            Interest Rate
          </label>

          <input
            type="number"
            name="interestRate"
            value={form.interestRate}
            onChange={handleChange}
            placeholder="12"
            className="w-full mt-2 h-[52px] rounded-2xl border border-[#DDE3EC] px-4 outline-none focus:border-[#232B5D]"
            required
          />
        </div>

        {/* MAX AMOUNT */}
        <div>
          <label className="text-sm font-medium text-[#111827]">
            Maximum Amount
          </label>

          <input
            type="number"
            name="maxAmount"
            value={form.maxAmount}
            onChange={handleChange}
            placeholder="500000"
            className="w-full mt-2 h-[52px] rounded-2xl border border-[#DDE3EC] px-4 outline-none focus:border-[#232B5D]"
            required
          />
        </div>

        {/* TENURE */}
        <div>
          <label className="text-sm font-medium text-[#111827]">
            Tenure
          </label>

          <input
            type="text"
            name="tenure"
            value={form.tenure}
            onChange={handleChange}
            placeholder="12 Months"
            className="w-full mt-2 h-[52px] rounded-2xl border border-[#DDE3EC] px-4 outline-none focus:border-[#232B5D]"
            required
          />
        </div>

        {/* PROCESSING */}
        <div>
          <label className="text-sm font-medium text-[#111827]">
            Processing Fee
          </label>

          <input
            type="text"
            name="processingFee"
            value={form.processingFee}
            onChange={handleChange}
            placeholder="2%"
            className="w-full mt-2 h-[52px] rounded-2xl border border-[#DDE3EC] px-4 outline-none focus:border-[#232B5D]"
            required
          />
        </div>

        {/* ELIGIBILITY */}
        <div>
          <label className="text-sm font-medium text-[#111827]">
            Eligibility
          </label>

          <textarea
            name="eligibility"
            value={form.eligibility}
            onChange={handleChange}
            placeholder="Minimum salary ₹25,000"
            className="w-full mt-2 rounded-2xl border border-[#DDE3EC] px-4 py-4 outline-none focus:border-[#232B5D]"
            rows={4}
            required
          />
        </div>
      </div>

      {/* BUTTON */}
      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="h-[52px] px-8 rounded-2xl bg-[#232B5D] text-white font-medium hover:bg-[#1B214B] transition-all"
        >
          Save Product
        </button>
      </div>
    </form>
  );
}