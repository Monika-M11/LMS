"use client";

import { useState } from "react";

import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  return (
    <div className="flex bg-[#F5F7FB] min-h-screen">
      <AdminSidebar
        isOpen={sidebarOpen}
        toggle={() =>
          setSidebarOpen(!sidebarOpen)
        }
      />

      <div className="flex-1 flex flex-col">
        <AdminTopbar
          toggleSidebar={() =>
            setSidebarOpen(!sidebarOpen)
          }
        />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}