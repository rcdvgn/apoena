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
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-bg": "rgb(var(--primary-bg) / <alpha-value>)",
        "primary-light": "rgb(var(--primary-light) / <alpha-value>)",
        "primary-dark": "rgb(var(--primary-dark) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        subtext: "rgb(var(--subtext) / <alpha-value>)",
        intratext: "rgb(var(--intratext) / <alpha-value>)",
        placeholder: "rgb(var(--placeholder) / <alpha-value>)",
        "negative-space": "rgb(var(--negative-space) / <alpha-value>)",
        combu: "rgb(var(--combu) / <alpha-value>)",
        combudark: "rgb(var(--combudark) / <alpha-value>)",

        secondary: "rgb(var(--secondary) / <alpha-value>)",

        warning: "rgb(var(--warning) / <alpha-value>)",

        like: "rgb(var(--like) / <alpha-value>)",
        comment: "rgb(var(--comment) / <alpha-value>)",
        save: "rgb(var(--save) / <alpha-value>)",
        share: "rgb(var(--share) / <alpha-value>)",
      },
      spacing: {
        "global-spacing": "var(--global-spacing)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
