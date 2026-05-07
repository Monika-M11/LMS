"use client";

import {
  Bell,
  Menu,
  Search,
} from "lucide-react";

interface Props {
  toggleSidebar: () => void;
}

export default function AdminTopbar({
  toggleSidebar,
}: Props) {
  return (
    <header className="h-[82px] bg-white border-b border-[#E9EDF5] px-6 flex items-center justify-between">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden"
        >
          <Menu size={24} />
        </button>

        <div>
          <h1 className="text-[28px] font-bold text-[#111827]">
            Admin Dashboard
          </h1>

          <p className="text-sm text-gray-500">
            Manage loans and customers
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">
        {/* SEARCH */}
        <div className="hidden md:flex items-center bg-[#F5F7FB] rounded-2xl px-4 h-[48px] w-[320px]">
          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm ml-3 w-full"
          />
        </div>

        {/* NOTIFICATION */}
        <button className="relative w-12 h-12 rounded-2xl bg-[#F5F7FB] flex items-center justify-center">
          <Bell size={20} />

          <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* PROFILE */}
        <div className="flex items-center gap-3 bg-[#F5F7FB] rounded-2xl px-3 py-2">
          <div className="w-11 h-11 rounded-2xl bg-[#232B5D] flex items-center justify-center text-white font-semibold">
            A
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-semibold text-[#111827]">
              Admin User
            </p>

            <p className="text-xs text-gray-500">
              Super Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}