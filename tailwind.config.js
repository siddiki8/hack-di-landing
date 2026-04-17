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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
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
        // Custom theme colors
        deepgreen: {
          DEFAULT: "rgb(4, 13, 14)",
          50: "rgb(14, 43, 46)",
          100: "rgb(24, 65, 69)",
          200: "rgb(34, 87, 92)",
          300: "rgb(44, 109, 115)",
          400: "rgb(54, 131, 138)",
          500: "rgb(64, 153, 161)",
          600: "rgb(84, 180, 189)",
          700: "rgb(114, 199, 207)",
          800: "rgb(144, 218, 225)",
          900: "rgb(174, 237, 243)",
          950: "rgb(204, 246, 250)",
        },
        gold: {
          DEFAULT: "rgb(225, 186, 67)",
          50: "rgb(249, 243, 213)",
          100: "rgb(246, 238, 194)",
          200: "rgb(243, 233, 175)",
          300: "rgb(240, 228, 156)",
          400: "rgb(237, 223, 137)",
          500: "rgb(225, 186, 67)",
          600: "rgb(203, 167, 60)",
          700: "rgb(180, 148, 53)",
          800: "rgb(158, 130, 47)",
          900: "rgb(135, 111, 40)",
          950: "rgb(113, 93, 33)",
        },
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
        "breathing-glow": {
          "0%, 100%": {
            opacity: 0.5,
            transform: "scale(0.97)",
          },
          "50%": {
            opacity: 0.8,
            transform: "scale(1.03)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "breathing-glow": "breathing-glow 4s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-white":
          "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
