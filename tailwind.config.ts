import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        accent: "#f97316",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          md: "2rem",
          lg: "3rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;

