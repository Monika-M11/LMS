import {
  LayoutDashboard,
  Package,
  FileText,
  CreditCard,
  Wallet,
  Bell,
  User,
  CircleHelp,
  LogOut,
} from 'lucide-react';

export const SIDEBAR_MENU = [
  {
    title: 'MAIN',
    items: [
      {
        name: 'Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
        danger: false,
      },

      {
        name: 'Loan Products',
        icon: Package,
href: '/dashboard/loan-products',
        danger: false,
      },

      {
        name: 'My Applications',
        icon: FileText,
        href: '/applications',
        danger: false,
      },

      {
        name: 'My Loans',
        icon: CreditCard,
        href: '/my-loans',
        danger: false,
      },

      {
        name: 'Payments',
        icon: Wallet,
        href: '/payments',
        danger: false,
      },
    ],
  },

  {
    title: 'ACCOUNT',
    items: [
      {
        name: 'Notifications',
        icon: Bell,
        href: '/notifications',
        danger: false,
      },

      {
        name: 'Profile',
        icon: User,
        href: '/dashboard/profile',
        danger: false,
      },

      {
        name: 'Help & Support',
        icon: CircleHelp,
        href: '/support',
        danger: false,
      },
    ],
  },

  {
    title: 'SYSTEM',
    items: [
      {
        name: 'Logout',
        icon: LogOut,
        href: '/logout',
        danger: true,
      },
    ],
  },
];








// import {
//   LayoutDashboard,
//   Package,
//   FileText,
//   CreditCard,
//   Wallet,
//   Bell,
//   User,
//   CircleHelp,
//   LogOut,
//   Users,
//   ClipboardCheck,
//   BadgeDollarSign,
//   ChartColumn,
//   Settings,
// } from 'lucide-react';

// /* =========================
//    USER SIDEBAR
// ========================= */

// export const USER_SIDEBAR_MENU = [
//   {
//     title: 'MAIN',
//     items: [
//       {
//         name: 'Dashboard',
//         icon: LayoutDashboard,
//         href: '/dashboard',
//       },

//       {
//         name: 'Loan Products',
//         icon: Package,
//         href: '/loan-products',
//       },

//       {
//         name: 'My Applications',
//         icon: FileText,
//         href: '/applications',
//       },

//       {
//         name: 'My Loans',
//         icon: CreditCard,
//         href: '/my-loans',
//       },

//       {
//         name: 'Payments',
//         icon: Wallet,
//         href: '/payments',
//       },
//     ],
//   },

//   {
//     title: 'ACCOUNT',
//     items: [
//       {
//         name: 'Notifications',
//         icon: Bell,
//         href: '/notifications',
//       },

//       {
//         name: 'Profile',
//         icon: User,
//         href: '/profile',
//       },

//       {
//         name: 'Help & Support',
//         icon: CircleHelp,
//         href: '/support',
//       },
//     ],
//   },

//   {
//     title: 'SYSTEM',
//     items: [
//       {
//         name: 'Logout',
//         icon: LogOut,
//         href: '/logout',
//         danger: true,
//       },
//     ],
//   },
// ];

// /* =========================
//    ADMIN SIDEBAR
// ========================= */

// export const ADMIN_SIDEBAR_MENU = [
//   {
//     title: 'ADMIN PANEL',
//     items: [
//       {
//         name: 'Dashboard',
//         icon: LayoutDashboard,
//         href: '/dashboard',
//       },

//       {
//         name: 'Customers',
//         icon: Users,
//         href: '/customers',
//       },

//       {
//         name: 'Loan Applications',
//         icon: ClipboardCheck,
//         href: '/loan-applications',
//       },

//       {
//         name: 'Loan Products',
//         icon: Package,
//         href: '/loan-products',
//       },

//       {
//         name: 'Approved Loans',
//         icon: CreditCard,
//         href: '/approved-loans',
//       },

//       {
//         name: 'EMI Collections',
//         icon: BadgeDollarSign,
//         href: '/emi-collections',
//       },

//       {
//         name: 'Reports & Analytics',
//         icon: ChartColumn,
//         href: '/reports',
//       },
//     ],
//   },

//   {
//     title: 'SYSTEM',
//     items: [
//       {
//         name: 'Notifications',
//         icon: Bell,
//         href: '/notifications',
//       },

//       {
//         name: 'Settings',
//         icon: Settings,
//         href: '/settings',
//       },

//       {
//         name: 'Admin Profile',
//         icon: User,
//         href: '/profile',
//       },

//       {
//         name: 'Logout',
//         icon: LogOut,
//         href: '/logout',
//         danger: true,
//       },
//     ],
//   },
// ];