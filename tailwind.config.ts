import type { Config,  } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "container-color": "var(--container-color)",
        "title-color": "var(--title-color)",
        "title-color-dark": "var(--title-color-dark)",
        "body-color": "var(--body-color)",
        "text-color": "var(--text-color)",
        "bg-color": "var(--bg-color)",
        "border-color": "rgba(var(--border-color))",
      },
      boxShadow: {
        header: "0 0 4px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
