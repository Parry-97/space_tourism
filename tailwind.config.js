/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/assets/**/*.{png,svg}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["var(--font-bellefair)"],
        barlow: ["var(--font-barlow)"],
        barlow_cond: ["var(--font-barlow-cond)"],
      },
    },
  },
  plugins: [],
};
