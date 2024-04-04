import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        background: "var(--background)",
        primary: "var(--primary)",
        text: "var(--text)",
        subtext: "var(--subtext)",
        secondary: "var(--secondary)",

        like: "var(--like)",
      },
      spacing: {
        "global-spacing": "var(--global-spacing)",
      },
    },
  },
  plugins: [],
};
export default config;
