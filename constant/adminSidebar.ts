import {
  LayoutDashboard,
  Package,
  FileText,
  Users,
  CreditCard,
  Wallet,
  Bell,
  ShieldCheck,
  BarChart3,
  LogOut,
} from "lucide-react";

import { storage } from "@/src/lib/storage";

export const logout = () => {
  storage.clearAuth();

  window.location.replace(
    '/login'
  );
};


type SidebarItem = {
  name: string;
  icon: any;
  href: string;
  danger?: boolean;
  action?: () => void;
};

type SidebarSection = {
  title: string;
  items: SidebarItem[];
};

export const ADMIN_SIDEBAR_MENU: SidebarSection[] = [
  {
    title: "MAIN",
    items: [
      {
        name: "Dashboard",
        icon: LayoutDashboard,
        href: "/admin/dashboard",
      },

      {
        name: "Loan Products",
        icon: Package,
        href: "/admin/loan-products",
      },

      {
        name: "Applications",
        icon: FileText,
        href: "/admin/applications",
      },

      {
        name: "Customers",
        icon: Users,
        href: "/admin/customers",
      },

      {
        name: "Loans",
        icon: CreditCard,
        href: "/admin/loans",
      },

      {
        name: "Payments",
        icon: Wallet,
        href: "/admin/payments",
      },
    ],
  },

  {
    title: "MANAGEMENT",
    items: [
      {
        name: "Reports",
        icon: BarChart3,
        href: "/admin/reports",
      },

      {
        name: "Notifications",
        icon: Bell,
        href: "/admin/notifications",
      },

      {
        name: "Admins",
        icon: ShieldCheck,
        href: "/admin/admins",
      },
    ],
  },

  {
    title: "SYSTEM",
    items: [
     {
  name: "Logout",
  icon: LogOut,
  href: "#",
  danger: true,
  action: logout,
},
    ],
  },
];