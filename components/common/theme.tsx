// ============================================================
// LMS Design System — TypeScript Theme Constants
// Use these for inline styles when Tailwind can't reach a value.
// All colors are also available as CSS variables in globals.css.
// ============================================================

export const colors = {
  navy:       "#30364F",
  navyDark:   "#22273A",
  navyLight:  "#424B6E",
  navyMuted:  "#4A5270",

  steel:      "#ACBAC4",
  steelDark:  "#8A9BAA",
  steelLight: "#C8D3DA",
  steelPale:  "#E4EAED",

  sand:       "#E1D9BC",
  sandDark:   "#C9C09E",
  sandLight:  "#EDE7D2",
  sandPale:   "#F5F1E6",

  cream:      "#F0F0DB",
  creamDark:  "#DDDDC3",
  creamLight: "#F7F7EE",

  white:      "#FFFFFF",

  success:    "#3D7A5E",
  successBg:  "#EAF3EE",
  warning:    "#8A6C2A",
  warningBg:  "#FBF4E4",
  error:      "#8B3A3A",
  errorBg:    "#FAEAEA",
} as const;

export const fonts = {
  display: "'DM Serif Display', Georgia, serif",
  body:    "'DM Sans', system-ui, sans-serif",
  mono:    "'JetBrains Mono', monospace",
} as const;

export const radius = {
  sm:   "6px",
  md:   "10px",
  lg:   "16px",
  xl:   "24px",
  full: "9999px",
} as const;

export const shadows = {
  sm: "0 1px 3px rgba(48,54,79,0.08), 0 1px 2px rgba(48,54,79,0.06)",
  md: "0 4px 12px rgba(48,54,79,0.10), 0 2px 4px rgba(48,54,79,0.06)",
  lg: "0 12px 32px rgba(48,54,79,0.12), 0 4px 8px rgba(48,54,79,0.08)",
} as const;

// Semantic aliases — prefer these in components
export const theme = {
  bgPage:        colors.cream,
  bgSurface:     colors.white,
  bgMuted:       colors.sandPale,
  bgInverse:     colors.navy,

  textPrimary:   colors.navy,
  textSecondary: colors.navyMuted,
  textMuted:     colors.steelDark,
  textInverse:   colors.white,
  textPlaceholder: colors.steel,

  borderDefault: colors.steelLight,
  borderFocus:   colors.navyLight,

  accentPrimary:   colors.navy,
  accentSecondary: colors.sand,
  accentTertiary:  colors.steel,

  colors,
  fonts,
  radius,
  shadows,
} as const;

export type Theme = typeof theme;
export default theme;