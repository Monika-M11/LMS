// import { storage }
// from './storage';

// const BASE_URL =
//   'http://localhost:5000';

// // COMMON API FUNCTION
// const request = async (
//   endpoint: string,
//   body: any = {},
//   auth: boolean = false
// ) => {

//   const headers:
//     Record<string, string> = {
//       'Content-Type':
//         'application/json',
//     };

//   // TOKEN
//   if (auth) {

//     const token =
//       storage.getToken();

//     if (token) {

//       headers.Authorization =
//         `Bearer ${token}`;

//     }

//   }

//   const response = await fetch(
//     `${BASE_URL}${endpoint}`,
//     {
//       method: 'POST',

//       headers,

//       body: JSON.stringify(
//         body || {}
//       ),
//     }
//   );

//   const data =
//     await response.json();

//   if (!response.ok) {

//     throw new Error(
//       data.message ||
//       'Something went wrong'
//     );

//   }

//   return data;
// };

// // AUTH APIs
// export const loginUser = (
//   payload: any
// ) => {

//   return request(
//     '/auth/login',
//     payload
//   );

// };

// // LOAN APIs
// export const getLoanProducts =
//   async () => {

//     return request(
//       '/loans/products'
//     );

// };

// export const getLoanProduct =
//   async (id: string) => {

//     return request(
//       '/loans/product',
//       { id }
//     );

// };

// export const getEligibilityFields = (loanId: string) => {
//   return request('/loans/eligibility-fields', { loanId });
// };

// export const checkEligibility = (payload: any) => {
//   return request('/loans/check-eligibility', payload);
// };

// export const getApplicationFields = (loanId: string) => {
//   return request('/loans/application-fields', { loanId });
// };

// export const createLoanProduct =
//   (payload: any) => {

//     return request(
//       '/loans/create-product',
//       payload
//     );
// };

// export const getCustomers =
//   async () => {

//     return request(
//       '/users/customers'
//     );

// };

// export const getCustomerDetails =
//   (id: number) => {

//     return request(
//       '/users/customer-details',
//       { id }
//     );

// };


// // export const updateProfile = (
// //   data: any
// // ) => {

// //   return request(
// //     '/users/update-profile',
// //     {
// //       method: 'POST',
// //       body: JSON.stringify(data),
// //     }
// //   );

// // };


// // export const getProfile = (
// //   userId: number
// // ) => {

// //   return request(
// //     '/users/profile',
// //     {
// //       method: 'POST',
// //       body: JSON.stringify({
// //         userId,
// //       }),
// //     }
// //   );

// // };


// export const getProfile = (userId: number) => {
//   return request('/users/profile', { userId });
// };

// export const updateProfile = (data: any) => {
//   return request('/users/update-profile', data);
// };



import { storage } from './storage';

const BASE_URL = 'http://localhost:5000';

// ─── COMMON REQUEST ───────────────────────────────────────
const request = async (
  endpoint: string,
  body: any = {},
  auth: boolean = false
) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (auth) {
    const token = storage.getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body || {}),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
};

// ─── AUTH ─────────────────────────────────────────────────
export const loginUser = (payload: any) => {
  return request('/auth/login', payload);
};

// ─── LOAN PRODUCTS ────────────────────────────────────────
export const getLoanProducts = async () => {
  return request('/loans/products');
};

export const getLoanProduct = async (id: string) => {
  return request('/loans/product', { id });
};

export const createLoanProduct = (payload: any) => {
  return request('/loans/create-product', payload);
};

// ─── ELIGIBILITY FIELDS ───────────────────────────────────
export const getEligibilityFields = (loanId: number) => {
  return request('/loans/eligibility-fields', { loanId });
};

export const addEligibilityField = (data: {
  loanId: number;
  fieldName: string;
  fieldLabel: string;
  fieldType: string;
  placeholder: string;
  isRequired: boolean;
}) => {
  return request('/loans/add-eligibility-field', data);
};

export const deleteEligibilityField = (id: number) => {
  return request('/loans/delete-eligibility-field', { id });
};

// ─── ELIGIBILITY RULES ────────────────────────────────────
export const getEligibilityRules = (loanId: number) => {
  return request('/loans/eligibility-rules', { loanId });
};

export const addEligibilityRule = (data: {
  loanId: number;
  fieldName: string;
  operator: string;
  value: string;
}) => {
  return request('/loans/add-eligibility-rule', data);
};

export const deleteEligibilityRule = (id: number) => {
  return request('/loans/delete-eligibility-rule', { id });
};

// ─── ELIGIBILITY CHECK ────────────────────────────────────
export const checkEligibility = (payload: any) => {
  return request('/loans/check-eligibility', payload);
};

// ─── APPLICATION FIELDS ───────────────────────────────────
export const getApplicationFields = (loanId: string) => {
  return request('/loans/application-fields', { loanId });
};

// ─── CUSTOMERS ────────────────────────────────────────────
export const getCustomers = async () => {
  return request('/users/customers');
};

export const getCustomerDetails = (id: number) => {
  return request('/users/customer-details', { id });
};

// ─── PROFILE ──────────────────────────────────────────────
export const getProfile = (userId: number) => {
  return request('/users/profile', { userId });
};

export const updateProfile = (data: any) => {
  return request('/users/update-profile', data);
};

//Application Form
export const createApplication = (data: any) =>
  request('/applications/create', data, true);

export const getMyApplications = (userId: number) =>
  request('/applications/my-applications', { userId });


    export const uploadDocuments =
  (formData: FormData) =>

    fetch(
      `${BASE_URL}/applications/upload-documents`,
      {
        method: 'POST',
        body: formData,
      }
    ).then((res) => res.json());