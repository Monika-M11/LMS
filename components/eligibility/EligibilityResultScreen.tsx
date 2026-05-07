'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';

interface Props {
  eligible: boolean;
  income: string;
  loanId: string;
}

export default function EligibilityResultScreen({
  eligible,
  income,
  loanId,
}: Props) {
  const router = useRouter();

  const amount = Number(income) * 10;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-[28px] p-10 border border-[#E9EDF5] shadow-sm text-center">
        {eligible ? (
          <>
            <div className="text-6xl">✅</div>

            <h1 className="text-4xl font-bold text-[var(--color-navy)] mt-5">
              Eligible
            </h1>

            <p className="text-[var(--text-muted)] mt-3">
              Congratulations! You are eligible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
              <div className="bg-[var(--color-sand-pale)] rounded-2xl p-5">
                <p className="text-sm text-gray-500">
                  Eligible Amount
                </p>

                <h2 className="text-2xl font-bold mt-2 text-[var(--color-navy)]">
                  ₹{amount.toLocaleString()}
                </h2>
              </div>

              <div className="bg-[var(--color-sand-pale)] rounded-2xl p-5">
                <p className="text-sm text-gray-500">
                  Interest
                </p>

                <h2 className="text-2xl font-bold mt-2 text-[var(--color-navy)]">
                  12%
                </h2>
              </div>

              <div className="bg-[var(--color-sand-pale)] rounded-2xl p-5">
                <p className="text-sm text-gray-500">
                  EMI
                </p>

                <h2 className="text-2xl font-bold mt-2 text-[var(--color-navy)]">
                  ₹12,000
                </h2>
              </div>
            </div>

            <div className="mt-10">
              <Button
                onClick={() =>
                  router.push(
                    `/dashboard/application/${loanId}`
                  )
                }
              >
                Continue Application
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="text-6xl">❌</div>

            <h1 className="text-4xl font-bold text-[var(--color-error)] mt-5">
              Not Eligible
            </h1>

            <p className="text-[var(--text-muted)] mt-4 leading-7">
              Your income or credit score does not meet
              the eligibility criteria.
            </p>
          </>
        )}
      </div>
    </div>
  );
}