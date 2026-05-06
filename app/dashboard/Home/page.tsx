export default function Page() {
  return (
    <div>
      {/* PAGE HEADER */}
      <div className="mb-8">
        {/* <h1 className="text-[34px] font-bold text-[#111827]">
          Dashboard
        </h1> */}

        {/* <p className="text-gray-500 mt-2">
          Welcome back to LoanSys
        </p> */}
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* CARD */}
        <div className="bg-white rounded-[28px] p-6 border border-[#E9EDF5] shadow-sm">
          <p className="text-sm text-gray-500">
            Total Loans
          </p>

          <h2 className="text-3xl font-bold text-[#111827] mt-3">
            124
          </h2>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-[28px] p-6 border border-[#E9EDF5] shadow-sm">
          <p className="text-sm text-gray-500">
            Active Applications
          </p>

          <h2 className="text-3xl font-bold text-[#111827] mt-3">
            18
          </h2>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-[28px] p-6 border border-[#E9EDF5] shadow-sm">
          <p className="text-sm text-gray-500">
            Monthly Payments
          </p>

          <h2 className="text-3xl font-bold text-[#111827] mt-3">
            ₹45K
          </h2>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-[28px] p-6 border border-[#E9EDF5] shadow-sm">
          <p className="text-sm text-gray-500">
            Approved Loans
          </p>

          <h2 className="text-3xl font-bold text-[#111827] mt-3">
            92
          </h2>
        </div>
      </div>
    </div>
  );
}