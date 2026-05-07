export default function Page() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-[32px] font-bold text-[#30364F]">
          Welcome Back 👋
        </h1>

        <p className="text-[#8A9BAA] mt-2 text-[15px]">
          Track your loans, applications, and payments
        </p>
      </div>

      {/* TOP SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* ACTIVE LOAN */}
        <div className="bg-white rounded-[28px] p-6 border border-[#E4EAED] shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A9BAA]">
              Active Loan
            </p>

            <div className="w-11 h-11 rounded-2xl bg-[#F5F1E6] flex items-center justify-center">
              💳
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#30364F] mt-5">
            ₹2.5L
          </h2>

          <p className="text-sm text-green-600 mt-2">
            Running successfully
          </p>
        </div>

        {/* EMI DUE */}
        <div className="bg-white rounded-[28px] p-6 border border-[#E4EAED] shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A9BAA]">
              Next EMI
            </p>

            <div className="w-11 h-11 rounded-2xl bg-[#F5F1E6] flex items-center justify-center">
              📅
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#30364F] mt-5">
            ₹12,500
          </h2>

          <p className="text-sm text-[#8A9BAA] mt-2">
            Due on 12 Aug 2026
          </p>
        </div>

        {/* APPLICATIONS */}
        <div className="bg-white rounded-[28px] p-6 border border-[#E4EAED] shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A9BAA]">
              Applications
            </p>

            <div className="w-11 h-11 rounded-2xl bg-[#F5F1E6] flex items-center justify-center">
              📄
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#30364F] mt-5">
            3
          </h2>

          <p className="text-sm text-[#8A9BAA] mt-2">
            1 under review
          </p>
        </div>

        {/* CREDIT SCORE */}
        <div className="bg-white rounded-[28px] p-6 border border-[#E4EAED] shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A9BAA]">
              Credit Score
            </p>

            <div className="w-11 h-11 rounded-2xl bg-[#F5F1E6] flex items-center justify-center">
              ⭐
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#30364F] mt-5">
            785
          </h2>

          <p className="text-sm text-green-600 mt-2">
            Excellent
          </p>
        </div>
      </div>

      {/* LOAN OVERVIEW */}
      {/* <div className="grid grid-cols-1 xl:grid-cols-3 gap-6"> */}
        {/* CURRENT LOAN */}
        {/* <div className="xl:col-span-2 bg-white rounded-[30px] border border-[#E4EAED] p-7 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[22px] font-semibold text-[#30364F]">
                Current Loan
              </h2>

              <p className="text-sm text-[#8A9BAA] mt-1">
                Personal Loan
              </p>
            </div> */}

            {/* <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              Active
            </span>
          </div>

          <div className="mt-8 space-y-5">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#8A9BAA]">
                  Loan Progress
                </span>

                <span className="font-medium text-[#30364F]">
                  68%
                </span>
              </div>

              <div className="h-3 bg-[#EDE7D2] rounded-full overflow-hidden">
                <div className="h-full w-[68%] bg-[#30364F] rounded-full" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div>
                <p className="text-sm text-[#8A9BAA]">
                  Amount
                </p>

                <p className="font-semibold text-[#30364F] mt-1">
                  ₹5,00,000
                </p>
              </div>

              <div>
                <p className="text-sm text-[#8A9BAA]">
                  Paid
                </p>

                <p className="font-semibold text-[#30364F] mt-1">
                  ₹3,40,000
                </p>
              </div>

              <div>
                <p className="text-sm text-[#8A9BAA]">
                  Remaining
                </p>

                <p className="font-semibold text-[#30364F] mt-1">
                  ₹1,60,000
                </p>
              </div>

              <div>
                <p className="text-sm text-[#8A9BAA]">
                  EMI
                </p>

                <p className="font-semibold text-[#30364F] mt-1">
                  ₹12,500
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* QUICK ACTIONS */}
        {/* <div className="bg-white rounded-[30px] border border-[#E4EAED] p-7 shadow-sm">
          <h2 className="text-[22px] font-semibold text-[#30364F]">
            Quick Actions
          </h2>

          <div className="space-y-4 mt-7">
            <button className="w-full h-[58px] rounded-2xl bg-[#30364F] text-white font-medium hover:bg-[#424B6E] transition-all">
              Apply New Loan
            </button>

            <button className="w-full h-[58px] rounded-2xl border border-[#C8D3DA] text-[#30364F] font-medium hover:bg-[#F5F1E6] transition-all">
              Pay EMI
            </button>

            <button className="w-full h-[58px] rounded-2xl border border-[#C8D3DA] text-[#30364F] font-medium hover:bg-[#F5F1E6] transition-all">
              Download Statement
            </button>

            <button className="w-full h-[58px] rounded-2xl border border-[#C8D3DA] text-[#30364F] font-medium hover:bg-[#F5F1E6] transition-all">
              Contact Support
            </button> */}
          {/* </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}