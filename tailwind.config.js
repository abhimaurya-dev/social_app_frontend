/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        "custom-white": "#f0f2f5",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "tertiary-color": "var(--tertiary-color)",
        "bg-dark": "var(--bg-dark)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary-color": "var(--primary-color)",
          "secondary-color": "var(--secondary-color)",
          "tertiary-color": "var(--tertiary-color)",
          "bg-dark": "var(--bg-dark)",
        },
      },
    ],
  },
};
