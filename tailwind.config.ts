import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        notes: {
          blue: "#3CA7FF",
          red: "#FF4C3C",
          green: "#45FF3C",
          purple: "#7D3CFF",
        },
      },
    },
  },
  darkMode: "class",
};
export default config;
