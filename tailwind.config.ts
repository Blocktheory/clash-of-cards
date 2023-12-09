/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./ui_components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        jura: ["Jura", "sans-serif"],
      },
      colors: {
        blue: {
          400: "#60A5FA",
          600: "#2563EB",
          700: "#1D4ED8",
        },
        green: {
          400: "#4ADE80",
        },
        yellow: {
          50: "#FEFCE8",
          100: "#FEF9C3",
          200: "#FEF08A",
          300: "#FDE047",
        },
        red: {
          500: "#EF4444",
          600: "#DC2626",
        },

        primary: "#0F172A",

        grey: {
          100: "#F1F5F9",
          200: "#8499B8",
          300: "#F8FAFC",
          400: "#E2E8F0",
          500: "#94A3B8",
          600: "#CBD5E1",
          700: "#FAFAFA",
        },
      },
      borderRadius: {
        custom: "18px",
      },
      boxShadow: {
        sm: "0px 1px 2px 0px #0000000D",
        static: "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)",
        card: "5px -4px 4px 0px rgba(0, 0, 0, 0.25)",
        sheet: "0px -5px 50px 5px #00000024",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
