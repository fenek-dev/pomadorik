/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "dark",
      // {
      //   base: {
      //     primary: "#005f73",
      //     secondary: "#e9c46a",
      //     "base-100": "#e5989b",
      //     success: "#2a9d8f",
      //     error: "#e76f51",
      //   },
      // },
    ],
  },
  plugins: [daisyui],
};
