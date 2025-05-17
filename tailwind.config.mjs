import defaultTheme from "tailwindcss/defaultTheme";
import fluid, { extract } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    extract,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow-Regular", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [fluid],
};
