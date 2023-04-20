/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        128: "32em",
      },
    },
  },
  plugins: [require("daisyui")],
};
