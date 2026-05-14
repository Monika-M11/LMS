// export const storage = {
//   setToken: (token: string) => {
//     if (typeof window === 'undefined') return;
//     localStorage.setItem('token', token);

//     document.cookie = `token=${token}; path=/`;
//   },

//   getToken: () => {
//     if (typeof window === 'undefined') return null;
//     return localStorage.getItem('token');
//   },

// removeToken: () => {
//   if (typeof window === 'undefined') return;

//   localStorage.removeItem('token');

//   document.cookie =
//     "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
// },

//   setUser: (user: any) => {
//     if (typeof window === 'undefined') return;
//     localStorage.setItem('user', JSON.stringify(user));
//   },

//   getUser: () => {
//     if (typeof window === 'undefined') return null;

//     const user = localStorage.getItem('user');
//     return user ? JSON.parse(user) : null;
//   },

// clearAuth: () => {
//   if (typeof window === 'undefined') return;

//   localStorage.removeItem('token');
//   localStorage.removeItem('user');

//   sessionStorage.clear();

//   document.cookie =
//     "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
// },
// };



export const storage = {
  // ─── ADMIN TOKEN ─────────────────────
  setAdminToken: (token: string) => {
    if (typeof window === 'undefined') return;

    localStorage.setItem('admin_token', token);

    document.cookie =
      `admin_token=${token}; path=/`;
  },

  getAdminToken: () => {
    if (typeof window === 'undefined') return null;

    return localStorage.getItem(
      'admin_token'
    );
  },

  removeAdminToken: () => {
    if (typeof window === 'undefined') return;

    localStorage.removeItem(
      'admin_token'
    );

    document.cookie =
      'admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  },

  // ─── USER TOKEN ─────────────────────
  setUserToken: (token: string) => {
    if (typeof window === 'undefined') return;

    localStorage.setItem('user_token', token);

    document.cookie =
      `user_token=${token}; path=/`;
  },

  getUserToken: () => {
    if (typeof window === 'undefined') return null;

    return localStorage.getItem(
      'user_token'
    );
  },

  removeUserToken: () => {
    if (typeof window === 'undefined') return;

    localStorage.removeItem(
      'user_token'
    );

    document.cookie =
      'user_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  },

  // ─── USER DATA ─────────────────────
  setUser: (user: any) => {
    if (typeof window === 'undefined') return;

    localStorage.setItem(
      'user',
      JSON.stringify(user)
    );
  },

  getUser: () => {
    if (typeof window === 'undefined') return null;

    const user =
      localStorage.getItem('user');

    return user
      ? JSON.parse(user)
      : null;
  },

  removeUser: () => {
    if (typeof window === 'undefined') return;

    localStorage.removeItem('user');
  },

  // ─── CLEAR ALL ─────────────────────
  clearAuth: () => {
    if (typeof window === 'undefined') return;

    localStorage.removeItem(
      'admin_token'
    );

    localStorage.removeItem(
      'user_token'
    );

    localStorage.removeItem('user');

    document.cookie =
      'admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

    document.cookie =
      'user_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  },
};