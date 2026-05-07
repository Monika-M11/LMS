'use client';

import Button from '@/components/common/Button';

export default function DocumentUploadScreen() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-[28px] border border-[#E9EDF5] p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[var(--color-navy)]">
          Upload Documents
        </h1>

        <div className="space-y-5 mt-8">
          <UploadCard title="Aadhaar Card" />
          <UploadCard title="PAN Card" />
          <UploadCard title="Salary Slip" />
          <UploadCard title="Bank Statement" />
        </div>

        <div className="mt-8">
          <Button>
            Submit Application
          </Button>
        </div>
      </div>
    </div>
  );
}

function UploadCard({ title }: { title: string }) {
  return (
    <div className="border border-dashed border-[#CBD5E1] rounded-2xl p-6 flex items-center justify-between">
      <div>
        <h2 className="font-semibold text-[var(--color-navy)]">
          {title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Upload PDF or image
        </p>
      </div>

      <input type="file" />
    </div>
  );
}