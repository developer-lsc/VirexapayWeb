export const theme = {
  colors: {
    background: "hsl(210 25% 97%)",
    foreground: "hsl(220 70% 10%)",
    card: "hsl(0 0% 100%)",
    cardForeground: "hsl(220 70% 10%)",
    primary: "hsl(220 72% 16%)",
    primaryForeground: "hsl(0 0% 100%)",
    secondary: "hsl(210 20% 93%)",
    secondaryForeground: "hsl(220 70% 16%)",
    muted: "hsl(210 15% 93%)",
    mutedForeground: "hsl(215 16% 47%)",
    accent: "hsl(162 72% 42%)",
    accentForeground: "hsl(0 0% 100%)",
    destructive: "hsl(0 84% 60%)",
    border: "hsl(214 20% 90%)",
    success: "hsl(162 72% 42%)",
    warning: "hsl(38 92% 50%)",
    sidebarBackground: "hsl(220 72% 12%)",
    sidebarForeground: "hsl(210 20% 90%)",
    sidebarPrimary: "hsl(162 72% 42%)",
    sidebarPrimaryForeground: "hsl(0 0% 100%)",
    sidebarAccent: "hsl(220 60% 20%)",
    sidebarBorder: "hsl(220 50% 22%)",
  },
  gradients: {
    hero: "linear-gradient(135deg, hsl(220 72% 10%), hsl(220 72% 18%))",
    accent: "linear-gradient(135deg, hsl(162 72% 42%), hsl(162 72% 55%))",
  },
  shadows: {
    card: "0 1px 3px hsl(220 72% 10% / 0.06), 0 4px 12px hsl(220 72% 10% / 0.04)",
    elevated: "0 4px 20px hsl(220 72% 10% / 0.1), 0 8px 32px hsl(220 72% 10% / 0.06)",
  },
  radius: {
    sm: "8px",
    md: "10px",
    lg: "12px",
    xl: "16px",
  },
};

export type AppTheme = typeof theme;
