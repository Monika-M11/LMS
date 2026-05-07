'use client';

import {
  Bell,
  ChevronDown,
  Menu,
  Search,
} from 'lucide-react';

interface TopBarProps {
  toggleSidebar: () => void;
}

export default function TopBar({
  toggleSidebar,
}: TopBarProps) {
  return (
    <header className="h-[82px] bg-white border-b border-[#E9EDF5] px-8 flex items-center justify-between">
      {/* LEFT */}
      <div className="flex items-center gap-5">
        {/* MOBILE MENU */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden w-11 h-11 rounded-2xl hover:bg-gray-100 flex items-center justify-center transition-all"
        >
          <Menu size={22} />
        </button>

        {/* PAGE TITLE */}
        <div>
          <h1 className="text-[28px] font-bold text-[#111827] leading-none">
            Dashboard
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Welcome back to LoanSys
          </p>
        </div>
      </div>

      {/* CENTER SEARCH */}
      <div className="hidden lg:flex flex-1 justify-center px-10">
        <div className="relative w-full max-w-[520px]">
          <Search
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search customers, loans, payments..."
            className="
              w-full
              h-[52px]
              bg-[#F5F7FB]
              border
              border-transparent
              rounded-2xl
              pl-14
              pr-5
              text-[15px]
              outline-none
              transition-all
              focus:border-[#5561D7]
              focus:bg-white
              focus:shadow-sm
            "
          />
        </div>
      </div>

      {/* RIGHT */}
       <div className="flex items-center gap-5">
        {/* ADD BUTTON */}
        {/* <button
          className="
            hidden
            md:flex
            h-[48px]
            px-5
            rounded-2xl
            bg-[#5561D7]
            text-white
            items-center
            justify-center
            text-sm
            font-medium
            hover:opacity-90
            transition-all
          "
        >
          + New Loan
        </button> */}

        {/* NOTIFICATION */}
        <button
          className="
            relative
            w-12
            h-12
            rounded-2xl
            bg-[#F5F7FB]
            flex
            items-center
            justify-center
            hover:bg-gray-100
            transition-all
          "
        >
          <Bell size={20} className="text-[#111827]" />

          <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white" />
        </button>

        {/* PROFILE */}
        <button
          className="
            flex
            items-center
            gap-3
            bg-[#F5F7FB]
            hover:bg-gray-100
            transition-all
            rounded-2xl
            pl-3
            pr-4
            h-[56px]
          "
        >
          {/* AVATAR */}
          <div
            className="
              w-11
              h-11
              rounded-2xl
              bg-gradient-to-br
              from-[#5561D7]
              to-[#7C3AED]
              flex
              items-center
              justify-center
              text-white
              font-semibold
              text-sm
              shadow-sm
            "
          >
            AU
          </div>

          {/* USER INFO */}
          <div className="hidden md:block text-left">
            <p className="text-sm font-semibold text-[#111827] leading-none">
              Jhon
            </p>

            <p className="text-xs text-gray-500 mt-1">
              Jhon@loansys.in
            </p>
          </div>

          <ChevronDown
            size={16}
            className="text-gray-500 hidden md:block"
          />
        </button>
      </div>
    </header>
  );
}