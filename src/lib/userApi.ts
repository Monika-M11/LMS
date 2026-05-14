import { storage } from "./storage";

const BASE_URL =
  "http://localhost:5000";

export const userRequest = async (
  endpoint: string,
  body: any = {}
) => {

  const token =
    storage.getUserToken();

  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",

        Authorization:
          `Bearer ${token}`,
      },

      body: JSON.stringify(body),
    }
  );

  return response.json();
};