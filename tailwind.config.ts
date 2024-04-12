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
        "gradient-test":
          "linear-gradient(0deg, rgba(1, 93, 91, 0.10) 0%, rgba(1, 93, 91, 0.10) 100%)",
      },
      colors: {
        // primary: "#8976FD",
        primary: "#34B5F7",
        mirage: "#1E1D36",
        mirageLight: "rgba(30, 29, 54, 0.7)",
        primaryBold: "#1C91CE",
        jacarta: "#292C67",
      },
    },
  },
  plugins: [],
};
export default config;
