export const storage = {

  setToken: (token: string) => {
    localStorage.setItem(
      'token',
      token
    );
  },

  getToken: () => {
    return localStorage.getItem(
      'token'
    );
  },

  removeToken: () => {
    localStorage.removeItem(
      'token'
    );
  },

  setUser: (user: any) => {
    localStorage.setItem(
      'user',
      JSON.stringify(user)
    );
  },

  getUser: () => {

    const user =
      localStorage.getItem('user');

    return user
      ? JSON.parse(user)
      : null;
  },

  clearAuth: () => {

    localStorage.removeItem(
      'token'
    );

    localStorage.removeItem(
      'user'
    );

  },

};