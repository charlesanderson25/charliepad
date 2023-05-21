/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        defaultRed: "#f9004d",
        darkTheme: "#282828",
      },
    },
  },
  variants: {},
  plugins: [],
};
