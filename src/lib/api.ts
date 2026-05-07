import { storage }
from './storage';

const BASE_URL =
  'http://localhost:5000';

// COMMON API FUNCTION
const request = async (
  endpoint: string,
  body: any = {},
  auth: boolean = false
) => {

  const headers:
    Record<string, string> = {
      'Content-Type':
        'application/json',
    };

  // TOKEN
  if (auth) {

    const token =
      storage.getToken();

    if (token) {

      headers.Authorization =
        `Bearer ${token}`;

    }

  }

  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    {
      method: 'POST',

      headers,

      body: JSON.stringify(
        body || {}
      ),
    }
  );

  const data =
    await response.json();

  if (!response.ok) {

    throw new Error(
      data.message ||
      'Something went wrong'
    );

  }

  return data;
};

// AUTH APIs
export const loginUser = (
  payload: any
) => {

  return request(
    '/auth/login',
    payload
  );

};

// LOAN APIs
export const getLoanProducts =
  async () => {

    return request(
      '/loans/products'
    );

};

export const getLoanProduct =
  async (id: string) => {

    return request(
      '/loans/product',
      { id }
    );

};

export const getEligibilityFields = (loanId: string) => {
  return request('/loans/eligibility-fields', { loanId });
};

export const checkEligibility = (payload: any) => {
  return request('/loans/check-eligibility', payload);
};

