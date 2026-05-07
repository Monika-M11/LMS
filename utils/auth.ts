export const setRole = (role: "admin" | "user") => {
  localStorage.setItem("role", role);
};

export const getRole = () => {
  if (typeof window === "undefined") return null;

  return localStorage.getItem("role");
};

export const logout = () => {
  localStorage.removeItem("role");
};