/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  themes: [
    {
      mytheme: {

        "primary": "#4dd1bd",

        "secondary": "#fcc4ef",

        "accent": "#a5ffbc",

        "neutral": "#25313C",

        "base-100": "#E7E6EA",

        "info": "#7BB2F4",

        "success": "#63E398",

        "warning": "#F1A01E",

        "error": "#E81725",
      },
    },
  ],
  plugins: [require("daisyui")],
};
