"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import DashboardLayout from "@/components/DashboardLayout";

import { storage } from "@/src/lib/storage";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  const checkAuth = () => {

    const token =
      storage.getUserToken()

    if (!token) {

      router.replace("/login");

      return false;
    }

    return true;
  };

  useEffect(() => {

    // initial auth check
    const authenticated =
      checkAuth();

    if (authenticated) {

      setLoading(false);
    }

    // fixes browser back cache
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

  // prevent protected content flash
  if (loading) {

    return null;
  }

  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}