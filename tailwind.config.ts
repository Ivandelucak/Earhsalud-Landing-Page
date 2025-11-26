// tailwind.config.ts
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "earh-blue-50": "#e4f1f7",
        "earh-blue-100": "#c8dfea",
        "earh-blue-200": "#9fbfd5",
        "earh-blue-300": "#769fbe",
        "earh-blue-400": "#4f80a7",
        "earh-blue-500": "#356890",
        "earh-blue-600": "#178c9b", // textos importantes / bordes
        "earh-blue-700": "#116a92",
        "earh-blue-800": "#132a3b",
        "earh-blue-900": "#0b4a6f", // títulos

        "earh-green-100": "#DFF5E9",
        "earh-green-600": "#25D366",

        "earh-cream-50": "#FFF9F3",

        // Paleta anterior por compatibilidad
        brand: {
          50: "#E8F6F8",
          400: "#21A8B9",
          500: "#178C9B",
          600: "#0F6D7A",
        },
        navy: {
          700: "#0E2D3A",
        },
        accent: {
          amber: "#F3B94C",
        },
      },

      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-source-sans-3)", "system-ui", "sans-serif"],
      },

      boxShadow: {
        card: "0 6px 24px rgba(14,45,58,0.08)",
        cardHover: "0 10px 28px rgba(14,45,58,0.12)",
      },

      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },
    },
  },
  plugins: [typography],
};

export default config;
