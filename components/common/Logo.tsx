import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
}

const Logo = ({ size = "md", inverted = false }: LogoProps) => {
  const sizes = {
    sm: { icon: "w-7 h-7", text: "text-lg" },
    md: { icon: "w-10 h-10", text: "text-2xl" },
    lg: { icon: "w-14 h-14", text: "text-3xl" },
  };

  return (
    <div className="flex items-center gap-2.5">
      {/* Icon mark */}
      <div
        className={`${sizes[size].icon} rounded-xl flex items-center justify-center flex-shrink-0`}
        style={{
          background: inverted ? "var(--color-sand)" : "var(--color-navy)",
        }}
      >
        {/* Stylised ₹ / coin mark */}
        <svg
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4/6 h-4/6"
        >
          <rect
            x="6" y="7" width="16" height="2"
            rx="1"
            fill={inverted ? "var(--color-navy)" : "var(--color-sand)"}
          />
          <rect
            x="6" y="11" width="10" height="2"
            rx="1"
            fill={inverted ? "var(--color-navy)" : "var(--color-sand)"}
          />
          <path
            d="M8 13 L14 21"
            stroke={inverted ? "var(--color-navy)" : "var(--color-sand)"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Wordmark */}
      <span
        className={`${sizes[size].text} tracking-tight`}
        style={{
          fontFamily: "var(--font-display)",
          color: inverted ? "var(--color-cream)" : "var(--color-navy)",
          fontWeight: 400,
        }}
      >
        LoanSys
      </span>
    </div>
  );
};

export default Logo;