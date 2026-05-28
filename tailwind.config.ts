import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
      colors: {
        ink: "#15171c",
        graphite: "#30343b",
        mist: "#eef3f4",
        circuit: "#19b8c7",
        copper: "#c87941",
      },
      boxShadow: {
        panel: "0 24px 70px rgba(17, 24, 39, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
