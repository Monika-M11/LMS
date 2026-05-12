'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

import { approveLoan } from '@/src/lib/api';

export default function ApproveLoanPage() {

  const router = useRouter();

  const params = useParams();

  const id = Array.isArray(params?.id)
    ? params.id[0]
    : params?.id;

  const [form, setForm] = useState({
    approvedAmount: '',
    interestRate: '',
    tenureMonths: '',
    remarks: '',
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (
    key: string,
    value: string
  ) => {

    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

  };

  const handleApprove = async () => {

    try {

      if (!id) {
        alert('Invalid application');
        return;
      }

      if (
        !form.approvedAmount ||
        !form.interestRate ||
        !form.tenureMonths
      ) {
        alert('Fill all required fields');
        return;
      }

      setLoading(true);

      await approveLoan({

        applicationId: Number(id),

        approvedAmount:
          Number(form.approvedAmount),

        interestRate:
          Number(form.interestRate),

        tenureMonths:
          Number(form.tenureMonths),

        remarks: form.remarks,

      });

      alert('Loan approved successfully');

      router.push(
        '/admin/applications'
      );

    } catch (error: any) {

      console.log(error);

      alert(
        error.message ||
        'Failed to approve loan'
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="max-w-3xl mx-auto p-6">

      <div className="bg-white border rounded-[28px] p-8">

        <h1 className="text-3xl font-bold mb-2">
          Loan Approval
        </h1>

        <p className="text-gray-500 mb-8">
          Enter approval details
        </p>

        <div className="grid gap-6">

          <Input
            label="Approved Amount"
            type="number"
            placeholder="Enter approved amount"
            value={form.approvedAmount}
            onChange={(e) =>
              handleChange(
                'approvedAmount',
                e.target.value
              )
            }
          />

          <Input
            label="Interest Rate (%)"
            type="number"
            placeholder="Enter interest rate"
            value={form.interestRate}
            onChange={(e) =>
              handleChange(
                'interestRate',
                e.target.value
              )
            }
          />

          <Input
            label="Tenure (Months)"
            type="number"
            placeholder="Enter tenure"
            value={form.tenureMonths}
            onChange={(e) =>
              handleChange(
                'tenureMonths',
                e.target.value
              )
            }
          />

          <Input
            label="Remarks"
            placeholder="Optional remarks"
            value={form.remarks}
            onChange={(e) =>
              handleChange(
                'remarks',
                e.target.value
              )
            }
          />

        </div>

        <div className="mt-10">

          <Button
            onClick={handleApprove}
            disabled={loading}
          >
            {
              loading
                ? 'Approving...'
                : 'Approve Loan'
            }
          </Button>

        </div>

      </div>

    </div>

  );

}