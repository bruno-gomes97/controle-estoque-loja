import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#0e0e0d",
        background: "#f5f6f7",
        primary: "#788d97",
        secondary: "#acbcc3",
        accent: "#89a3b0",
      },
    },
  },
  plugins: [],
} satisfies Config;
