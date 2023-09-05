import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      
    },
    colors: {
      transparent: "transparent",
      brand: {
        dominant: "#FF6633", // our main brand colour
        accent: "#FACE3C", // for spicing up things
        standard: "#303030", // for most text
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss"), require("@tailwindcss/forms")],
};
export default config;
