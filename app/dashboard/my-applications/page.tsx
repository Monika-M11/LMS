'use client';

import { useEffect, useState } from 'react';
import { getMyApplications } from '@/src/lib/api';
import { storage } from '@/src/lib/storage';

interface Application {
  id: number;
  loanId: number;
  status: string;
  amount?: string | null;
  interest?: string | null;
  fullName?: string | null;
  monthlyIncome?: string | null;
}

export default function MyApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);

      const user = storage.getUser();

      if (!user?.id) {
        console.warn('No user found');
        setApplications([]);
        return;
      }

      const data = await getMyApplications(user.id);

      console.log('APPLICATION API RESPONSE:', data);

      // ✅ CORRECT FIX
      setApplications(data?.applications || []);

    } catch (error) {
      console.log('FETCH ERROR:', error);
      setApplications([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          My Applications
        </h1>

        <p className="text-gray-500 mt-2">
          Track all your loan requests
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

      {/* LIST */}
      <div className="space-y-5">

        {applications.map((item) => (

          <div
            key={item.id}
            className="
              bg-white
              border
              rounded-[28px]
              p-6
              flex
              items-center
              justify-between
            "
          >

            {/* LEFT */}
            <div>

              <h2 className="text-xl font-bold">
                Loan #{item.loanId}
              </h2>

              <p className="text-gray-500 mt-2">
                Amount: ₹{item.amount || 'N/A'}
              </p>

              <p className="text-gray-500">
                Monthly Income:
                {' '}
                ₹{item.monthlyIncome || 'N/A'}
              </p>

              <p className="text-gray-500">
                Name:
                {' '}
                {item.fullName || 'N/A'}
              </p>

            </div>

            {/* RIGHT */}
            <div>

              <span
                className="
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                  bg-[#EEF2FF]
                  text-[#5561D7]
                "
              >
                {item.status}
              </span>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}