'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import {
  getApplicationById,
  updateApplicationStatus,
} from '@/src/lib/api';

export default function ApplicationDetailPage() {

  const params = useParams();
  const router = useRouter();

  const id = Array.isArray(params?.id)
    ? params.id[0]
    : params?.id;

  const [application, setApplication] =
    useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchApplication();

  }, [id]);

  const fetchApplication = async () => {

    try {

      if (!id) return;

      setLoading(true);

      const response =
        await getApplicationById(id);

      setApplication(response.application);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  const handleStatus = async (
    status: string
  ) => {

    try {

      if (!id) return;

      await updateApplicationStatus(
        id,
        status
      );

      alert(`Application ${status}`);

      router.push(
        '/admin/applications'
      );

    } catch (error) {

      console.log(error);

      alert('Failed to update status');

    }

  };

  if (loading) {
    return (
      <div className="p-8">
        Loading application...
      </div>
    );
  }

  if (!application) {
    return (
      <div className="p-8 text-red-500">
        Application not found
      </div>
    );
  }

  return (

    <div className="max-w-4xl mx-auto p-6">

      <div className="bg-white border rounded-[28px] p-8">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-3xl font-bold">
              Application Review
            </h1>

            <p className="text-gray-500 mt-2">
              Review submitted loan application
            </p>

          </div>

        
             <span
  className={`
    px-4
    py-2
    rounded-full
    text-sm
    font-medium

    ${
      application.status === 'approved'
        ? 'bg-green-100 text-green-700'

      : application.status === 'rejected'
        ? 'bg-red-100 text-red-700'

      : application.status === 'submitted'
        ? 'bg-yellow-100 text-yellow-700'

      : 'bg-[#EEF2FF] text-[#5561D7]'
    }
  `}
>
  {application.status}
</span>

        </div>

        {/* APPLICATION DATA */}
        <div className="grid md:grid-cols-2 gap-6">

          {Object.entries(application)
            .filter(
              ([key]) =>
                ![
                  'id',
                  'loanId',
                  'status',
                  'createdAt',
                ].includes(key)
            )
            .map(([key, value]) => (

              <div
                key={key}
                className="border rounded-2xl p-5"
              >

                <p className="text-sm text-gray-500 mb-2 capitalize">
                  {key}
                </p>

                <p className="text-lg font-semibold">
                  {String(value || 'N/A')}
                </p>

              </div>

            ))}

        </div>

    
    {/* ACTIONS */}
<div className="flex gap-4 mt-10">

  {/* APPROVE */}
  <button
    disabled={
      application.status === 'approved'
    }
    onClick={() =>
      router.push(
        `/admin/applications/${id}/approve`
      )
    }
    className={`
      px-8
      py-3
      rounded-xl
      font-medium
      text-white

      ${
        application.status === 'approved'
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-green-600 hover:bg-green-700'
      }
    `}
  >
    Approve
  </button>

  {/* REJECT */}
  <button
    disabled={
      application.status === 'rejected'
    }
    onClick={() =>
      handleStatus('rejected')
    }
    className={`
      px-8
      py-3
      rounded-xl
      font-medium
      text-white

      ${
        application.status === 'rejected'
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-red-600 hover:bg-red-700'
      }
    `}
  >
    Reject
  </button>

</div>

      </div>

    </div>

  );
}