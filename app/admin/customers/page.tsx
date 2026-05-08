'use client';

import { useEffect, useState } from 'react';

import {
  Info,
  X,
} from 'lucide-react';

import {
  getCustomers,
  getCustomerDetails,
} from '@/src/lib/api';

export default function CustomersScreen() {

  const [customers, setCustomers] =
    useState<any[]>([]);

  const [selectedCustomer, setSelectedCustomer] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  const [detailsLoading, setDetailsLoading] =
    useState(false);

  useEffect(() => {

    fetchCustomers();

  }, []);

  const fetchCustomers =
    async () => {

      try {

        const data =
          await getCustomers();

        setCustomers(
          data.customers || []
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

  };

  const handleViewCustomer =
    async (id: number) => {

      try {

        setDetailsLoading(true);

        const data =
          await getCustomerDetails(id);

        setSelectedCustomer(
          data.customer
        );

      } catch (error) {

        console.log(error);

      } finally {

        setDetailsLoading(false);

      }

  };

  if (loading) {

    return (
      <div className="p-10">
        Loading customers...
      </div>
    );

  }

  return (
    <div>

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-[34px] font-bold text-[#111827]">
          Customers
        </h1>

        <p className="text-gray-500 mt-2">
          View and manage customer profiles
        </p>
      </div>

      {/* CUSTOMER CARDS */}
      <div className="grid gap-5">

        {customers.map((item) => (

          <div
            key={item.id}
            className="
              bg-white
              border
              border-[#E9EDF5]
              rounded-[24px]
              p-6
              flex
              items-center
              justify-between
              shadow-sm
            "
          >

            {/* LEFT */}
            <div>

              <h2 className="text-xl font-semibold text-[#111827]">
                {item.full_name}
              </h2>

              <div className="mt-3 space-y-1">

                <p className="text-sm text-gray-500">
                  {item.email}
                </p>

                <p className="text-sm text-gray-500">
                  {item.phone}
                </p>

                <p className="text-sm text-gray-400">
                  Joined on{' '}
                  {new Date(
                    item.created_at
                  ).toLocaleDateString()}
                </p>

              </div>

            </div>

            {/* RIGHT */}
            <button
              onClick={() =>
                handleViewCustomer(item.id)
              }
              className="
                w-12
                h-12
                rounded-2xl
                bg-[#EEF2FF]
                flex
                items-center
                justify-center
                text-[#4F46E5]
                hover:bg-[#E0E7FF]
                transition-all
              "
            >
              <Info size={20} />
            </button>

          </div>

        ))}

      </div>

      {/* DETAILS MODAL */}
      {selectedCustomer && (

        <div
          className="
            fixed
            inset-0
            bg-black/40
            z-50
            flex
            items-center
            justify-center
            p-6
          "
        >

          <div
            className="
              bg-white
              w-full
              max-w-3xl
              rounded-[32px]
              p-8
              relative
              max-h-[90vh]
              overflow-y-auto
            "
          >

            {/* CLOSE */}
            <button
              onClick={() =>
                setSelectedCustomer(null)
              }
              className="
                absolute
                top-5
                right-5
                w-10
                h-10
                rounded-xl
                bg-[#F3F4F6]
                flex
                items-center
                justify-center
              "
            >
              <X size={18} />
            </button>

            <h2 className="text-3xl font-bold text-[#111827]">
              Customer Details
            </h2>

            {detailsLoading ? (

              <div className="mt-10">
                Loading details...
              </div>

            ) : (

              <div className="grid md:grid-cols-2 gap-6 mt-8">

                <DetailCard
                  label="Full Name"
                  value={selectedCustomer.full_name}
                />

                <DetailCard
                  label="Email"
                  value={selectedCustomer.email}
                />

                <DetailCard
                  label="Phone"
                  value={selectedCustomer.phone}
                />

                <DetailCard
                  label="Gender"
                  value={selectedCustomer.gender}
                />

                <DetailCard
                  label="Date of Birth"
                  value={selectedCustomer.dob}
                />

                <DetailCard
                  label="Marital Status"
                  value={selectedCustomer.marital_status}
                />

                <DetailCard
                  label="Employment Type"
                  value={selectedCustomer.employment_type}
                />

                <DetailCard
                  label="Company Name"
                  value={selectedCustomer.company_name}
                />

                <DetailCard
                  label="Monthly Income"
                  value={selectedCustomer.monthly_income}
                />

                <DetailCard
                  label="Work Experience"
                  value={selectedCustomer.work_experience}
                />

                <DetailCard
                  label="Aadhaar"
                  value={selectedCustomer.aadhaar}
                />

                <DetailCard
                  label="PAN"
                  value={selectedCustomer.pan}
                />

                <DetailCard
                  label="Address"
                  value={selectedCustomer.address}
                />

                <DetailCard
                  label="City"
                  value={selectedCustomer.city}
                />

                <DetailCard
                  label="State"
                  value={selectedCustomer.state}
                />

                <DetailCard
                  label="Pincode"
                  value={selectedCustomer.pincode}
                />

              </div>

            )}

          </div>

        </div>

      )}

    </div>
  );

}

function DetailCard({
  label,
  value,
}: {
  label: string;
  value: any;
}) {

  return (
    <div
      className="
        border
        border-[#E9EDF5]
        rounded-2xl
        p-5
      "
    >

      <p className="text-sm text-gray-500">
        {label}
      </p>

      <h3 className="text-[#111827] font-semibold mt-2 break-words">
        {value || '-'}
      </h3>

    </div>
  );

}