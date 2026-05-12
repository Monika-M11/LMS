'use client';

import { useState } from 'react';

import Button from '@/components/common/Button';

import {
  uploadDocuments,
} from '@/src/lib/api';


import {
  useParams,
  useRouter,
} from 'next/navigation';

export default function
DocumentUploadScreen() {

  const router =
    useRouter();

  const params =
    useParams();

  const applicationId =
    params?.applicationId as string;

  const [files, setFiles] =
    useState<any>({
      aadhaar: null,
      pan: null,
      salarySlip: null,
      bankStatement: null,
    });

  const handleFileChange = (
    key: string,
    file: File | null
  ) => {

    setFiles((prev: any) => ({
      ...prev,
      [key]: file,
    }));

  };

  const handleSubmit =
    async () => {

      try {

        const formData =
          new FormData();

        formData.append(
          'applicationId',
          applicationId
        );

        Object.keys(files)
          .forEach((key) => {

          if (files[key]) {

            formData.append(
              key,
              files[key]
            );

          }

        });

        await uploadDocuments(
          formData
        );

        alert(
          'Application submitted'
        );

        router.push(
          '/dashboard/my-applications'
        );

      } catch (error) {

        console.log(error);

        alert(
          'Failed to upload documents'
        );

      }

  };

  return (

    <div className="max-w-4xl mx-auto">

      <div
        className="
          bg-white
          rounded-[28px]
          border
          border-[#E9EDF5]
          p-8
          shadow-sm
        "
      >

        <h1
          className="
            text-3xl
            font-bold
          "
        >
          Upload Documents
        </h1>

        <div className="space-y-5 mt-8">

          <UploadCard
            title="Aadhaar Card"
            onChange={(file) =>
              handleFileChange(
                'aadhaar',
                file
              )
            }
          />

          <UploadCard
            title="PAN Card"
            onChange={(file) =>
              handleFileChange(
                'pan',
                file
              )
            }
          />

          <UploadCard
            title="Salary Slip"
            onChange={(file) =>
              handleFileChange(
                'salarySlip',
                file
              )
            }
          />

          <UploadCard
            title="Bank Statement"
            onChange={(file) =>
              handleFileChange(
                'bankStatement',
                file
              )
            }
          />

        </div>

        <div className="mt-8">

          <Button
            onClick={handleSubmit}
          >
            Submit Application
          </Button>

        </div>

      </div>

    </div>

  );

}

function UploadCard({
  title,
  onChange,
}: {
  title: string;
  onChange:
    (file: File | null) => void;
}) {

  return (

    <div
      className="
        border
        border-dashed
        border-[#CBD5E1]
        rounded-2xl
        p-6
        flex
        items-center
        justify-between
      "
    >

      <div>

        <h2 className="font-semibold">
          {title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Upload PDF or image
        </p>

      </div>

      <input
        type="file"
        onChange={(e) =>
          onChange(
            e.target.files?.[0] || null
          )
        }
      />

    </div>

  );

}