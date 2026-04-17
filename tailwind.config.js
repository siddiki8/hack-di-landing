/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand palette (Subframe terminal-boot design)
        cream: {
          DEFAULT: "#f5f0e8",
          50: "#faf7f2",
          100: "#f5f0e8",
          200: "#ebe3d3",
          300: "#ddd0b8",
        },
        forest: {
          DEFAULT: "#1a3d2b",
          deep: "#0d2618",
          50: "#e7efea",
          100: "#bfd2c6",
          200: "#94b5a0",
          300: "#6a9879",
          400: "#407b52",
          500: "#1a3d2b",
          600: "#163525",
          700: "#112c1f",
          800: "#0d2618",
          900: "#061a0f",
        },
        coral: {
          DEFAULT: "#ff4d3b",
          50: "#ffe9e5",
          100: "#ffcac2",
          200: "#ff9e90",
          300: "#ff7562",
          400: "#ff4d3b",
          500: "#e6412f",
          600: "#c33322",
          700: "#99291c",
        },
        terminal: {
          DEFAULT: "#4caf76",
          dim: "#3b8f5e",
        },
        // Legacy aliases kept so subpages that still reference them don't break.
        deepgreen: {
          DEFAULT: "#1a3d2b",
          50: "#f5f0e8",
          100: "#1a3d2b",
          200: "#1a3d2b",
          300: "#1a3d2b",
        },
        gold: {
          DEFAULT: "#ff4d3b",
          50: "#ffe9e5",
          100: "#ffcac2",
          300: "#ff9e90",
          500: "#ff4d3b",
          600: "#e6412f",
          700: "#c33322",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "terminal-blink": {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        "ticker-fall": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "terminal-blink": "terminal-blink 1s steps(1) infinite",
        "ticker-fall": "ticker-fall 60s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
