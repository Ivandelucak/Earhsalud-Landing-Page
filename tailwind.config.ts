import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
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
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
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
  plugins: [require("@tailwindcss/typography")],
};

export default config;
