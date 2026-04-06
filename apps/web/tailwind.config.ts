import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      colors: {
        sand: "#f6f1ea",
        ink: "#1f2937",
        teal: {
          500: "#0f766e",
          700: "#134e4a",
        },
        gold: "#f59e0b",
      },
    },
  },
  plugins: [],
};

export default config;
