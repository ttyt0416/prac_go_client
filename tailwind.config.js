/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      "bumblebee",
      "dark",
      "forest",
      "cupcake",
      {
        custom: {
          primary: "#ffffff",
          secondary: "#000000",
          accent: "#37CDBE",
          neutral: "#3D4451",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
          "base-100": "#1a1a1a",
        },
      },
    ],
  },
};
