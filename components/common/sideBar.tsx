'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

import { SIDEBAR_MENU } from '@/constant/sidebar';

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function Sidebar({
  isOpen,
  toggle,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`
        h-screen
        bg-[#232B5D]
        text-white
        flex
        flex-col
        transition-all
        duration-300
        border-r
        border-white/10
        ${isOpen ? 'w-[280px]' : 'w-[92px]'}
      `}
    >
      {/* HEADER */}
      <div className="h-[82px] px-6 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* LOGO */}
          <div
            className="
              w-11
              h-11
              rounded-2xl
              bg-white
              flex
              items-center
              justify-center
              shadow-sm
            "
          >
            <span className="text-[#232B5D] font-bold text-lg">
              ₹
            </span>
          </div>

          {isOpen && (
            <div>
              <h1 className="text-xl font-semibold tracking-tight">
                LoanSys
              </h1>

              <p className="text-xs text-[#AEB9E1] mt-0.5">
                Loan Management
              </p>
            </div>
          )}
        </div>

        {/* COLLAPSE */}
        <button
          onClick={toggle}
          className="
            hidden
            lg:flex
            w-9
            h-9
            rounded-xl
            bg-white/10
            hover:bg-white/20
            items-center
            justify-center
            transition-all
          "
        >
          <ChevronLeft
            size={18}
            className={`
              transition-transform
              ${!isOpen ? 'rotate-180' : ''}
            `}
          />
        </button>
      </div>

      {/* MENU */}
      <div className="flex-1 overflow-y-auto px-4 py-6 sidebar-scroll">
        {SIDEBAR_MENU.map((section) => (
          <div
            key={section.title}
            className="mb-8"
          >
            {/* SECTION TITLE */}
            {isOpen && (
              <p
                className="
                  text-[11px]
                  font-semibold
                  tracking-[0.15em]
                  text-[#7C89B0]
                  px-4
                  mb-3
                "
              >
                {section.title}
              </p>
            )}

            {/* ITEMS */}
            <div className="space-y-1.5">
              {section.items.map((item) => {
                const Icon = item.icon;

                const isActive =
                  pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      group
                      flex
                      items-center
                      gap-4
                      px-4
                      h-[52px]
                      rounded-2xl
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? 'bg-white text-[#232B5D] shadow-lg'
                          : item.danger
                          ? 'hover:bg-red-500/10 text-red-300'
                          : 'hover:bg-white/5 text-[#C7D2FE]'
                      }
                    `}
                  >
                    <Icon
                      size={20}
                      className={`
                        flex-shrink-0
                        ${
                          isActive
                            ? 'text-[#232B5D]'
                            : item.danger
                            ? 'text-red-300'
                            : 'text-[#AEB9E1]'
                        }
                      `}
                    />

                    {isOpen && (
                      <span
                        className="
                          text-[15px]
                          font-medium
                        "
                      >
                        {item.name}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="p-4 border-t border-white/10">
        <div
          className="
            bg-white/5
            rounded-2xl
            p-4
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              w-12
              h-12
              rounded-2xl
              bg-gradient-to-br
              from-[#5561D7]
              to-[#7C3AED]
              flex
              items-center
              justify-center
              text-white
              font-semibold
              shadow-sm
            "
          >
            AU
          </div>

          {isOpen && (
            <div className="overflow-hidden">
              <p className="font-medium text-sm text-white truncate">
                Admin User
              </p>

              <p className="text-xs text-[#AEB9E1] truncate">
                admin@loansys.in
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}