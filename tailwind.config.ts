import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#838383",
          lighter: "#CFCFCF",
          darker: "#3B3B3B",
        },
        searchbarBg: "#F5F5F5",
        dark: "#1E1E1E",
        accent: "#A445ED",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        lora: ["var(--font-lora)"],
        inconsolata: ["var(--font-inconsolata)"],
      },
      boxShadow: {
        dropDown: "rgba(0, 0, 0, 0.1) 0px 5px 30px 0px",
        dropDownDark: "0px 5px 30px hsl(274deg, 82%, 50%);",
      },
    },
  },
  plugins: [],
};
export default config;
