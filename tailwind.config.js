/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#1B1B1B",
        },
        primary: {
          100: "#F55279",
        },
      },
    },
  },
  plugins: [],
};
