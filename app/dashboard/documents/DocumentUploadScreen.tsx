'use client';

import { useState, useEffect } from 'react';

import Button from '@/components/common/Button';

import {
  uploadDocuments,
  getExtraDocuments,
} from '@/src/lib/api';

import {
  useParams,
  useRouter,
} from 'next/navigation';

export default function DocumentUploadScreen() {

  const router = useRouter();

  const params = useParams();

  const applicationId = params?.id as string;

    console.log('applicationId from params:', applicationId);

  // BASIC DOCUMENTS
  const [files, setFiles] =
    useState<any>({
      aadhaar: null,
      pan: null,
      salarySlip: null,
      bankStatement: null,
    });

  // EXTRA DOCUMENTS
  const [extraDocs, setExtraDocs] =
    useState<any[]>([]);

  const [extraFiles, setExtraFiles] =
    useState<any>({});

  // FETCH EXTRA DOCS
  useEffect(() => {

    const fetchDocs =
      async () => {

        const loanId =
          new URLSearchParams(
            window.location.search
          ).get('loanId');

        // Prefer applicationId from query (set by LoanApplicationScreen)
        // fallback to pathname param if needed.
        const applicationIdFromQuery =
          new URLSearchParams(
            window.location.search
          ).get('applicationId');


        if (!loanId) return;

        const data =
          await getExtraDocuments(
            loanId
          );
                console.log(
  'Dynamic Docs:',
  data.documents
);

        setExtraDocs(
          data.documents || []
        );
      };



    fetchDocs();

  }, []);

  // BASIC FILE CHANGE
  const handleFileChange = (
    key: string,
    file: File | null
  ) => {

    setFiles((prev: any) => ({
      ...prev,
      [key]: file,
    }));

  };

  // EXTRA FILE CHANGE
  const handleExtraFile = (
    documentId: number,
    file: File | null
  ) => {

    setExtraFiles((prev: any) => ({
      ...prev,
      [documentId]: file,
    }));

  };

  // SUBMIT
  const handleSubmit = async () => {
  try {
    console.log('applicationId:', applicationId); // ← check this
    
    const formData = new FormData();
    formData.append('applicationId', applicationId);

    console.log('FormData applicationId:', formData.get('applicationId')); // ← check this

    // BASIC DOCS
    Object.keys(files).forEach((key) => {
      if (files[key]) {
        formData.append(key, files[key]);
        console.log('Appending file:', key, files[key].name); // ← check files
      }
    });

    // EXTRA DOCS
    Object.keys(extraFiles).forEach((id) => {
      if (extraFiles[id]) {
        formData.append(`extra_${id}`, extraFiles[id]);
        console.log('Appending extra file:', id, extraFiles[id].name);
      }
    });

    await uploadDocuments(formData);

    alert('Application submitted');
    router.push('/dashboard/my-applications');

  } catch (error) {
    console.log('Upload error:', error); // ← check full error
    alert('Failed to upload documents');
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

          {/* BASIC DOCS */}

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

          {/* EXTRA DOCS */}

          {extraDocs.map((doc) => (

            <UploadCard
              key={doc.id}
              title={doc.document_name}
              onChange={(file) =>
                handleExtraFile(
                  doc.id,
                  file
                )
              }
            />

          ))}

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