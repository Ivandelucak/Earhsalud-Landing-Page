import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Paleta nueva Earh Salud
        earh: {
          blue: {
            50: "var(--earh-blue-50)",
            100: "var(--earh-blue-100)",
            200: "var(--earh-blue-200)",
            300: "var(--earh-blue-300)",
            400: "var(--earh-blue-400)",
            500: "var(--earh-blue-500)",
            600: "var(--earh-blue-600)",
            700: "var(--earh-blue-700)",
            800: "var(--earh-blue-800)",
            900: "var(--earh-blue-900)",
          },
          green: {
            600: "#25D366", // WhatsApp
            100: "#DFF5E9",
          },
          cream: {
            50: "#FFF9F3",
          },
        },

        // Paleta anterior (por si hay clases viejas usándola)
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
        // Por si en algún momento usás display separado
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        // Fuente base de todo el sitio
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
