'use client';

import { useState } from 'react';

import Sidebar from './common/sideBar';
import TopBar from './common/topBar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  return (
    <div className="flex h-screen bg-[#EEF2FF] overflow-hidden">
      <Sidebar
        isOpen={sidebarOpen}
        toggle={() =>
          setSidebarOpen(!sidebarOpen)
        }
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar
          toggleSidebar={() =>
            setSidebarOpen(!sidebarOpen)
          }
        />

        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}