export const LOAN_PRODUCTS = [
  {
    id: 'gold-loan',

    name: 'Gold Loan',

    interestRate: '12%',

    maxAmount: '₹10,00,000',

    tenure: '12 Months',

    processingFee: '1%',

    eligibility:
      'Minimum age 21 years with valid gold assets.',

    emiExample: '₹8,900/month for ₹1,00,000',

    terms:
      'Gold valuation required. Loan subject to verification.',
  },

  {
    id: 'personal-loan',

    name: 'Personal Loan',

    interestRate: '18%',

    maxAmount: '₹25,00,000',

    tenure: '60 Months',

    processingFee: '2%',

    eligibility:
      'Salaried employees with minimum monthly income ₹25,000.',

    emiExample: '₹2,540/month for ₹1,00,000',

    terms:
      'PAN and Aadhaar mandatory for approval.',
  },

  {
    id: 'mortgage-loan',

    name: 'Mortgage Loan',

    interestRate: '10%',

    maxAmount: '₹2,00,00,000',

    tenure: '240 Months',

    processingFee: '0.5%',

    eligibility:
      'Property ownership documents required.',

    emiExample: '₹965/month for ₹1,00,000',

    terms:
      'Property legal verification mandatory.',
  },
];