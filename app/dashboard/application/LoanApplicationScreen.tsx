
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { getApplicationFields } from '@/src/lib/api';

const COMMON_APPLICATION_FIELDS = [
  { field_name: 'fullName', field_label: 'Full Name', field_type: 'text', placeholder: 'Enter your full name' },
  { field_name: 'phone', field_label: 'Phone Number', field_type: 'tel', placeholder: 'Enter phone number' },
  { field_name: 'email', field_label: 'Email Address', field_type: 'email', placeholder: 'Enter your email' },
  { field_name: 'aadhaar', field_label: 'Aadhaar Number', field_type: 'text', placeholder: 'Enter 12-digit Aadhaar' },
  { field_name: 'pan', field_label: 'PAN Number', field_type: 'text', placeholder: 'Enter PAN number' },
  { field_name: 'amount', field_label: 'Requested Loan Amount', field_type: 'number', placeholder: 'Enter amount' },
];

export default function LoanApplicationScreen() {
  const router = useRouter();
  const params = useParams();
  

  const loanId = params?.loanId ? 
    (Array.isArray(params.loanId) ? params.loanId[0] : params.loanId) as string 
    : null;

  const [fields, setFields] = useState<any[]>([]);
  const [form, setForm] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("📍 Current Params:", params);
    console.log("🔑 Extracted loanId:", loanId);

    if (!loanId) {
      setError("No loan ID found in URL");
      setLoading(false);
      return;
    }

    const fetchFields = async () => {
      try {
        console.log("🔄 Fetching fields for loanId:", loanId);
        
        const data = await getApplicationFields(loanId);
        console.log("✅ API Response:", data);

        const dynamicFields = data?.fields || [];
        console.log("📋 Dynamic fields received:", dynamicFields);

        setFields([...COMMON_APPLICATION_FIELDS, ...dynamicFields]);
      } catch (err: any) {
        console.error("❌ API Error:", err);
        setError("Failed to load form fields");
        setFields(COMMON_APPLICATION_FIELDS);
      } finally {
        setLoading(false);
      }
    };

    fetchFields();
  }, [loanId]);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    console.log('📋 Final Form Data:', form);
    if (loanId) router.push(`/dashboard/documents/${loanId}`);
  };

  if (loading) return <div className="p-8 text-center">Loading application form...</div>;
  if (error) return <div className="p-8 text-red-500 text-center">Error: {error}</div>;

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
              onChange={(e) => handleChange(field.field_name, e.target.value)}
            />
          ))}
        </div>

        <div className="mt-10">
          <Button onClick={handleSubmit} className="w-full md:w-auto px-10">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}