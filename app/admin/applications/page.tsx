'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { getAllApplications } from '@/src/lib/api';

interface Application {

  id: number;

  loanId: number;

  status: string;

  amount?: string;

  fullName?: string;

  salary?: string;

  company?: string;

  employmentType?: string;

  approvedAmount?: string;

  interestRate?: string;

  tenureMonths?: string;

}

export default function AdminApplicationsPage() {

  const router = useRouter();

  const [applications, setApplications] =
    useState<Application[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {

    try {

      setLoading(true);

      const response =
        await getAllApplications();

      setApplications(
        response.applications || []
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="mb-6">

        <h1 className="text-3xl font-bold">
          Loan Applications
        </h1>

        <p className="text-gray-500 mt-1">
          Review customer loan requests
        </p>

      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-gray-500">
          Loading applications...
        </p>
      )}

      {/* EMPTY */}
      {!loading && applications.length === 0 && (
        <p className="text-gray-500">
          No applications found
        </p>
      )}

      {/* APPLICATION LIST */}
      <div className="space-y-4">

        {applications.map((item) => (

          <div
            key={item.id}
            onClick={() =>
              router.push(
                `/admin/applications/${item.id}`
              )
            }
            className="
              bg-white
              border
              rounded-2xl
              p-5
              cursor-pointer
              hover:shadow-md
              transition
            "
          >

            {/* TOP */}
            <div className="flex items-start justify-between gap-4">

              {/* LEFT */}
              <div className="flex-1">

                <div className="flex items-center gap-3">

                  <h2 className="text-lg font-semibold">
                    {item.fullName || 'Unknown User'}
                  </h2>

                  <p className="text-sm text-gray-400">
                    #{item.loanId}
                  </p>

                </div>

                {/* DETAILS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">

                  <div>
                    <p className="text-xs text-gray-400">
                      Amount
                    </p>

                    <p className="font-medium text-sm">
                      ₹{item.amount || 'N/A'}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Salary
                    </p>

                    <p className="font-medium text-sm">
                      ₹{item.salary || 'N/A'}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Company
                    </p>

                    <p className="font-medium text-sm truncate">
                      {item.company || 'N/A'}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Employment
                    </p>

                    <p className="font-medium text-sm">
                      {item.employmentType || 'N/A'}
                    </p>
                  </div>

                </div>

                {/* APPROVAL INFO */}
                {
                  item.status === 'approved' && (
                    <div className="flex flex-wrap gap-3 mt-5">

                      <div className="bg-green-50 rounded-xl px-4 py-2">

                        <p className="text-[11px] text-gray-500">
                          Approved
                        </p>

                        <p className="text-sm font-semibold text-green-700">
                          ₹{item.approvedAmount || 'N/A'}
                        </p>

                      </div>

                      <div className="bg-blue-50 rounded-xl px-4 py-2">

                        <p className="text-[11px] text-gray-500">
                          Interest
                        </p>

                        <p className="text-sm font-semibold text-blue-700">
                          {item.interestRate || 'N/A'}%
                        </p>

                      </div>

                      <div className="bg-purple-50 rounded-xl px-4 py-2">

                        <p className="text-[11px] text-gray-500">
                          Tenure
                        </p>

                        <p className="text-sm font-semibold text-purple-700">
                          {item.tenureMonths || 'N/A'} months
                        </p>

                      </div>

                    </div>
                  )
                }

              </div>

              {/* STATUS */}
              <div>

                <span
                  className={`
                    px-3
                    py-1.5
                    rounded-full
                    text-xs
                    font-medium
                    whitespace-nowrap

                    ${
                      item.status === 'approved'
                        ? 'bg-green-100 text-green-700'

                      : item.status === 'rejected'
                        ? 'bg-red-100 text-red-700'

                      : item.status === 'submitted'
                        ? 'bg-yellow-100 text-yellow-700'

                      : 'bg-[#EEF2FF] text-[#5561D7]'
                    }
                  `}
                >
                  {item.status}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}