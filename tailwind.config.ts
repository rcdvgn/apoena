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
        "primary-light": "rgb(var(--primary-light) / <alpha-value>)",
        "primary-dark": "rgb(var(--primary-dark) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        subtext: "rgb(var(--subtext) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",

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
};
export default config;
