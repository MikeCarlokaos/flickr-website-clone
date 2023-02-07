/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "var-black-100": "#0000001a",
        "var-white-100": "#ffffff1a",
        "var-blue-100": "#0063dc",
      },
      gridTemplateColumns: {
        15: "repeat(15, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
