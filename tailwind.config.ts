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
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        subtext: "rgb(var(--color-subtext) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",

        like: "rgb(var(--color-like) / <alpha-value>)",
        comment: "rgb(var(--color-comment) / <alpha-value>)",
        save: "rgb(var(--color-save) / <alpha-value>)",
        share: "rgb(var(--color-share) / <alpha-value>)",
      },
      spacing: {
        "global-spacing": "var(--global-spacing)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
