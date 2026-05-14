'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { getApplicationFields, createApplication } from '@/src/lib/api';
import { storage } from '@/src/lib/storage';

const COMMON_APPLICATION_FIELDS = [
  {
    field_name: 'fullName',
    field_label: 'Full Name',
    field_type: 'text',
    placeholder: 'Enter your full name',
  },
  {
    field_name: 'phone',
    field_label: 'Phone Number',
    field_type: 'tel',
    placeholder: 'Enter phone number',
  },
  {
    field_name: 'email',
    field_label: 'Email Address',
    field_type: 'email',
    placeholder: 'Enter your email',
  },
  {
    field_name: 'aadhaar',
    field_label: 'Aadhaar Number',
    field_type: 'text',
    placeholder: 'Enter 12-digit Aadhaar',
  },
  {
    field_name: 'pan',
    field_label: 'PAN Number',
    field_type: 'text',
    placeholder: 'Enter PAN number',
  },
  {
    field_name: 'amount',
    field_label: 'Requested Loan Amount',
    field_type: 'number',
    placeholder: 'Enter amount',
  },
];

export default function LoanApplicationScreen() {
  const router = useRouter();
  const params = useParams();

  // Route folder is app/dashboard/application/[loanId]/page.tsx
  // so the param key must be loanId, not id.
  const rawLoanId = params?.loanId;

  const loanId: string | null = Array.isArray(rawLoanId)
    ? rawLoanId[0]
    : rawLoanId ?? null;

  const [fields, setFields] = useState<any[]>([]);
  const [form, setForm] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFields = async () => {
      try {
        if (!loanId) {
          setError('Invalid Loan ID');
          setLoading(false);
          return;
        }

        const data = await getApplicationFields(loanId);

        setFields([
          ...COMMON_APPLICATION_FIELDS,
          ...(data?.fields || []),
        ]);
      } catch (err) {
        console.log(err);
        setError('Failed to load form fields');
        setFields(COMMON_APPLICATION_FIELDS);
      } finally {
        setLoading(false);
      }
    };

    fetchFields();
  }, [loanId]);

  const handleChange = (key: string, value: any, type?: string) => {
    setForm((prev) => ({
      ...prev,
      [key]:
        type === 'number'
          ? value === ''
            ? ''
            : Number(value)
          : value ?? '',
    }));
  };

  const handleSubmit = async () => {
    try {
      if (!loanId) {
        alert('Invalid loan ID');
        return;
      }

      const requiredFields = ['fullName', 'phone', 'email'];

      for (const key of requiredFields) {
        if (!form[key]) {
          alert(`${key} is required`);
          return;
        }
      }

      const user = storage.getUser();
      if (!user?.id) {
        alert('User not found. Please login again.');
        return;
      }

      const payload = {
        userId: user.id,
        loanId,
        ...form,
      };

      const data = await createApplication(payload);

      router.push(`/dashboard/documents/${data.applicationId}?loanId=${loanId}&applicationId=${data.applicationId}`);


    } catch (error: any) {
      console.log(error);
      alert(error.message || 'Failed to submit application');
    }
  };

  if (loading)
    return <div className="p-8 text-center">Loading application form...</div>;

  if (error)
    return <div className="p-8 text-red-500 text-center">{error}</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-[28px] border p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Loan Application</h1>
        <p className="text-gray-600 mb-8">Please fill in all required details</p>

        <div className="grid md:grid-cols-2 gap-6">
          {fields.map((field) => (
            <Input
              key={field.field_name}
              label={field.field_label}
              type={field.field_type || 'text'}
              placeholder={field.placeholder}
              value={form[field.field_name] || ''}
              onChange={(e) =>
                handleChange(
                  field.field_name,
                  e.target.value,
                  field.field_type
                )
              }
            />
          ))}
        </div>

        <div className="mt-10">
          <Button onClick={handleSubmit} className="px-10">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

