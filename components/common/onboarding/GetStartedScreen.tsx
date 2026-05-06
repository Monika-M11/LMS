"use client";

import { useRouter } from "next/navigation";

const features = [
  { icon: "👥", label: "Customer Management" },
  { icon: "📋", label: "Loan Tracking" },
  { icon: "💳", label: "Payment Collection" },
  { icon: "📊", label: "Analytics & Reports" },
];

const GetStartedScreen = () => {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--bg-page)", fontFamily: "var(--font-body)" }}
    >
      {/* ── Navbar ── */}
      <header
        className="flex justify-between items-center px-8 py-5"
        style={{ borderBottom: "1px solid var(--color-sand)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "var(--color-navy)" }}
          >
            <svg viewBox="0 0 28 28" fill="none" className="w-5 h-5">
              <rect x="6" y="7" width="16" height="2" rx="1" fill="#E1D9BC" />
              <rect x="6" y="11" width="10" height="2" rx="1" fill="#E1D9BC" />
              <path d="M8 13 L14 21" stroke="#E1D9BC" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span
            className="text-2xl tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
          >
            LoanSys
          </span>
        </div>

        {/* Sign In button
        <button
          className="text-sm font-semibold px-5 py-2.5 transition-all duration-200"
          style={{
            color: "var(--color-navy)",
            border: "1.5px solid var(--color-navy)",
            borderRadius: "var(--radius-lg)",
          }}
          onMouseEnter={(e) => {
            const btn = e.currentTarget;
            btn.style.background = "var(--color-navy)";
            btn.style.color = "var(--color-cream)";
          }}
          onMouseLeave={(e) => {
            const btn = e.currentTarget;
            btn.style.background = "transparent";
            btn.style.color = "var(--color-navy)";
          }}
          onClick={() => router.push("/login")}
        >
          Sign In
        </button> */}
      </header> 

      {/* ── Hero ── */}
      <main className="flex-1 flex flex-col lg:flex-row items-center gap-12 px-8 py-16 max-w-6xl mx-auto w-full">
        {/* Text side */}
        <div className="flex-1 space-y-6">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5"
            style={{
              background: "var(--color-sand)",
              color: "var(--color-navy-muted)",
              borderRadius: "var(--radius-full)",
            }}
          >
            Loan Management Platform
          </span>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.1,
              color: "var(--color-navy)",
              fontWeight: 400,
            }}
          >
            Smart Loan
            <br />
            <span style={{ color: "var(--color-navy-light)" }}>Management</span>
            <br />
            System
          </h1>

          <p
            className="max-w-lg"
            style={{
              color: "var(--text-secondary)",
              fontSize: "var(--text-lg)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Manage customers, loans, collections, payments, and reports in one
            centralized platform.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {features.map((f) => (
              <span
                key={f.label}
                className="flex items-center gap-2 text-sm"
                style={{
                  background: "#fff",
                  border: "1px solid var(--color-sand)",
                  borderRadius: "var(--radius-full)",
                  padding: "6px 14px",
                  color: "var(--text-secondary)",
                }}
              >
                <span>{f.icon}</span> {f.label}
              </span>
            ))}
          </div>

          {/* CTA — goes to /login */}
          <div className="pt-2">
            <button
              className="font-medium transition-all duration-200 active:scale-[0.98]"
              style={{
                background: "var(--color-navy)",
                color: "var(--color-cream)",
                padding: "14px 36px",
                borderRadius: "var(--radius-xl)",
                fontSize: "1.0625rem",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--color-navy-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--color-navy)";
              }}
              onClick={() => router.push("/login")}
            >
              Get Started →
            </button>
          </div>
        </div>

        {/* Dashboard preview card */}
        {/* <div className="flex-shrink-0 w-full lg:w-[420px]">
          <div
            className="relative p-8"
            style={{
              background: "var(--color-navy)",
              borderRadius: "var(--radius-xl)",
              boxShadow: "var(--shadow-lg)",
            }}
          > */}
            {/* <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, var(--color-steel-light) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                borderRadius: "var(--radius-xl)",
              }}
            />
            <div className="relative space-y-4">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--color-sand)" }}>
                    <svg viewBox="0 0 28 28" fill="none" className="w-4 h-4">
                      <rect x="6" y="7" width="16" height="2" rx="1" fill="#30364F" />
                      <rect x="6" y="11" width="10" height="2" rx="1" fill="#30364F" />
                      <path d="M8 13 L14 21" stroke="#30364F" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", color: "var(--color-cream)" }}>LoanSys</span>
                </div>
                <span className="text-xs px-3 py-1.5 rounded-full" style={{ background: "rgba(172,186,196,.18)", color: "var(--color-steel-light)" }}>
                  Dashboard
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Active Loans", value: "1,248", delta: "+12%", up: true },
                  { label: "Collections", value: "₹4.2L", delta: "+8.3%", up: true },
                  { label: "Overdue", value: "36", delta: "-5%", up: false },
                  { label: "Recovery Rate", value: "94.2%", delta: "+2.1%", up: true },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4"
                    style={{
                      background: "rgba(255,255,255,.06)",
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid rgba(172,186,196,.2)",
                    }}
                  >
                    <p className="text-xs mb-1" style={{ color: "var(--color-steel)" }}>{stat.label}</p>
                    <p className="text-xl font-semibold" style={{ color: "var(--color-cream)" }}>{stat.value}</p>
                    <p className="text-xs mt-0.5" style={{ color: stat.up ? "#7ECBA1" : "#F49494" }}>
                      {stat.delta} this month
                    </p>
                  </div>
                ))}
              </div> */}
{/* 
              <div className="p-4" style={{ background: "rgba(255,255,255,.06)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(172,186,196,.2)" }}>
                <div className="flex justify-between mb-2">
                  <span className="text-xs" style={{ color: "var(--color-steel)" }}>Monthly target</span>
                  <span className="text-xs font-medium" style={{ color: "var(--color-sand)" }}>78%</span>
                </div>
                <div className="h-2 w-full rounded-full" style={{ background: "rgba(172,186,196,.2)" }}>
                  <div className="h-2 rounded-full" style={{ width: "78%", background: "var(--color-sand)" }} />
                </div>
              </div>
            </div> */}
          {/* </div>
        </div>*/}
      </main> 
    </div>
  );
};

export default GetStartedScreen;