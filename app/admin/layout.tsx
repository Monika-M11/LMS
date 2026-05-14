"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";

import { storage } from "@/src/lib/storage";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  const [loading, setLoading] =
    useState(true);

  const router = useRouter();

  const checkAuth = () => {

    const token =
      storage.getAdminToken();

    if (!token) {

      router.replace("/login");

      return false;
    }

    return true;
  };

  useEffect(() => {

    // initial check
    const isAuthenticated =
      checkAuth();

    if (isAuthenticated) {

      setLoading(false);
    }

    // browser back/forward cache fix
    const handlePageShow = (
      event: PageTransitionEvent
    ) => {

      if (event.persisted) {

        checkAuth();
      }
    };

    window.addEventListener(
      "pageshow",
      handlePageShow
    );

    return () => {

      window.removeEventListener(
        "pageshow",
        handlePageShow
      );
    };

  }, []);

  if (loading) {

    return null;
  }

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