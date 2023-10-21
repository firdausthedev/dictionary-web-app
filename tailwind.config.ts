import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          DEFAULT: "#838383",
          lighter: "#CFCFCF",
          darker: "#3B3B3B",
        },
        accent: "#A445ED",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        lora: ["var(--font-lora)"],
        inconsolata: ["var(--font-inconsolata)"],
      },
      boxShadow: {
        dropDown: "rgba(0, 0, 0, 0.1) 0px 5px 30px 0px",
      },
    },
  },
  plugins: [],
};
export default config;
