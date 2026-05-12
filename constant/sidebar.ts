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
        href: '/dashboard/my-applications',
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







