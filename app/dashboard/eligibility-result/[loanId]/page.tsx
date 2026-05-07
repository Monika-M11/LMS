'use client';


import Button from '@/components/common/Button';


import {
  useRouter,
  useSearchParams,
  useParams,
} from 'next/navigation';

export default function EligibilityResultPage() {
  const router = useRouter();

const params = useParams();

const loanId = params.loanId as string;

  const searchParams = useSearchParams();

  const eligible =
    searchParams.get('eligible') === 'true';

  return (
    <div className="max-w-3xl">
      <div className="bg-white rounded-[28px] p-8 border border-[var(--border-default)]">
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">
          Eligibility Result
        </h1>

        {eligible ? (
          <>
            <div className="mt-8 space-y-4">
              <div>
                <p className="text-sm text-[var(--text-muted)]">
                  Eligible Amount
                </p>

                <h2 className="text-2xl font-bold text-green-600">
                  ₹5,00,000
                </h2>
              </div>

              <div>
                <p className="text-sm text-[var(--text-muted)]">
                  Interest Rate
                </p>

                <h2 className="text-xl font-semibold">
                  12%
                </h2>
              </div>

              <div>
                <p className="text-sm text-[var(--text-muted)]">
                  Suggested EMI
                </p>

                <h2 className="text-xl font-semibold">
                  ₹12,000 / month
                </h2>
              </div>
            </div>

            <div className="mt-8">
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
            <p className="mt-6 text-red-500 font-medium">
              Sorry, you are not eligible for this loan.
            </p>

            <div className="mt-8">
              <Button
                variant="secondary"
                onClick={() => router.back()}
              >
                Try Again
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}