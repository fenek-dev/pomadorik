/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "var(--primary-color)",
          secondary: "var(--secondary-color)",
          "base-100": "var(--base-color)",
          success: "var(--success-color)",
          error: "var(--error-color)",
        },
      },
    ],
  },
  plugins: [daisyui],
};
