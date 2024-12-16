import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scales: {
          "0%": {
            transform: "scale(1.0)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1.0)",
          },
        },
      },
      animation: {
        scales: "scales 2s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        palette: {
          primary: "#1F406C",
          secondary: "#3D72FC",
          pearl: "#051D1F",
          mirage: "#1B272A",
          gray: "#b7b7b7",
          selago: "#ecf2fc",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
