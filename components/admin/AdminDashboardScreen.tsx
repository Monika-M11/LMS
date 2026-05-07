const stats = [
  {
    title: "Total Customers",
    value: "2,845",
  },

  {
    title: "Active Loans",
    value: "1,248",
  },

  {
    title: "Monthly Collection",
    value: "₹12.4L",
  },

  {
    title: "Pending Applications",
    value: "84",
  },
];

export default function AdminDashboardScreen() {
  return (
    <div>
      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-[28px] p-6 border border-[#E9EDF5] shadow-sm"
          >
            <p className="text-sm text-gray-500">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold text-[#111827] mt-3">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[28px] border border-[#E9EDF5] shadow-sm mt-8">
        <div className="p-6 border-b border-[#EEF2F7]">
          <h2 className="text-lg font-semibold text-[#111827]">
            Recent Applications
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-[#EEF2F7]">
                <th className="px-6 py-4 text-sm text-gray-500">
                  Customer
                </th>

                <th className="px-6 py-4 text-sm text-gray-500">
                  Loan Type
                </th>

                <th className="px-6 py-4 text-sm text-gray-500">
                  Amount
                </th>

                <th className="px-6 py-4 text-sm text-gray-500">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  customer: "Rahul",
                  type: "Gold Loan",
                  amount: "₹1,20,000",
                  status: "Pending",
                },

                {
                  customer: "Priya",
                  type: "Personal Loan",
                  amount: "₹3,50,000",
                  status: "Approved",
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-[#F5F7FB]"
                >
                  <td className="px-6 py-5 text-sm font-medium">
                    {item.customer}
                  </td>

                  <td className="px-6 py-5 text-sm">
                    {item.type}
                  </td>

                  <td className="px-6 py-5 text-sm">
                    {item.amount}
                  </td>

                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-xs bg-[#EEF2FF] text-[#4F46E5]">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}