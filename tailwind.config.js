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
      animation: {
        'slide': 'slide 30s linear infinite',
        'slide-reverse': 'slide-reverse 30s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'slide-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    fluid,
    require('tailwind-scrollbar-hide')
  ],
};