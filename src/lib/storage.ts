export const storage = {
  setToken: (token: string) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('token', token);
  },

  getToken: () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('token');
  },

  removeToken: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('token');
  },

  setUser: (user: any) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('user', JSON.stringify(user));
  },

  getUser: () => {
    if (typeof window === 'undefined') return null;

    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  clearAuth: () => {
    if (typeof window === 'undefined') return;

    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};
