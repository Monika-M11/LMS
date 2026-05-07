'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

export default function LoanApplicationScreen() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    aadhaar: '',
    pan: '',
    company: '',
    salary: '',
    amount: '',
  });

  const handleChange = (
    key: string,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-[28px] border border-[#E9EDF5] p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[var(--color-navy)]">
          Loan Application
        </h1>

        <div className="grid md:grid-cols-2 gap-5 mt-8">
          <Input
            label="Full Name"
            value={form.fullName}
            onChange={(e) =>
              handleChange('fullName', e.target.value)
            }
          />

          <Input
            label="Phone"
            value={form.phone}
            onChange={(e) =>
              handleChange('phone', e.target.value)
            }
          />

          <Input
            label="Email"
            value={form.email}
            onChange={(e) =>
              handleChange('email', e.target.value)
            }
          />

          <Input
            label="Aadhaar Number"
            value={form.aadhaar}
            onChange={(e) =>
              handleChange('aadhaar', e.target.value)
            }
          />

          <Input
            label="PAN Number"
            value={form.pan}
            onChange={(e) =>
              handleChange('pan', e.target.value)
            }
          />

          <Input
            label="Company Name"
            value={form.company}
            onChange={(e) =>
              handleChange('company', e.target.value)
            }
          />

          <Input
            label="Monthly Salary"
            value={form.salary}
            onChange={(e) =>
              handleChange('salary', e.target.value)
            }
          />

          <Input
            label="Requested Amount"
            value={form.amount}
            onChange={(e) =>
              handleChange('amount', e.target.value)
            }
          />
        </div>

        <div className="mt-8">
          <Button
            onClick={() =>
              router.push('/dashboard/documents/personal-loan')
            }
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}