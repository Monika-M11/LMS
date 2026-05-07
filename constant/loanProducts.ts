export const LOAN_PRODUCTS = [
  {
    id: "gold-loan",

    name: "Gold Loan",

    interestRate: "12%",

    maxAmount: "₹10,00,000",

    tenure: "12 Months",

    processingFee: "1%",

    eligibility:
      "Minimum age 21 years with valid gold assets.",

    emiExample: "₹8,900/month for ₹1,00,000",

    terms:
      "Gold valuation required. Loan subject to verification.",

    eligibilityFields: [
      {
        name: "goldValue",
        label: "Gold Value",
        type: "number",
        placeholder: "Enter gold value",
      },

      {
        name: "monthlyIncome",
        label: "Monthly Income",
        type: "number",
        placeholder: "Enter monthly income",
      },
    ],
  },

  {
    id: "personal-loan",

    name: "Personal Loan",

    interestRate: "18%",

    maxAmount: "₹25,00,000",

    tenure: "60 Months",

    processingFee: "2%",

    eligibility:
      "Salaried employees with minimum monthly income ₹25,000.",

    emiExample: "₹2,540/month for ₹1,00,000",

    terms:
      "PAN and Aadhaar mandatory for approval.",

    eligibilityFields: [
      {
        name: "monthlyIncome",
        label: "Monthly Income",
        type: "number",
        placeholder: "Enter monthly income",
      },

      {
        name: "creditScore",
        label: "Credit Score",
        type: "number",
        placeholder: "Enter credit score",
      },

      {
        name: "existingLoans",
        label: "Existing Loans",
        type: "number",
        placeholder: "Enter existing loan amount",
      },
    ],
  },

  {
    id: "mortgage-loan",

    name: "Mortgage Loan",

    interestRate: "10%",

    maxAmount: "₹2,00,00,000",

    tenure: "240 Months",

    processingFee: "0.5%",

    eligibility:
      "Property ownership documents required.",

    emiExample: "₹965/month for ₹1,00,000",

    terms:
      "Property legal verification mandatory.",

    eligibilityFields: [
      {
        name: "propertyValue",
        label: "Property Value",
        type: "number",
        placeholder: "Enter property value",
      },

      {
        name: "monthlyIncome",
        label: "Monthly Income",
        type: "number",
        placeholder: "Enter monthly income",
      },

      {
        name: "creditScore",
        label: "Credit Score",
        type: "number",
        placeholder: "Enter credit score",
      },
    ],
  },
];