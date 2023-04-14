/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fbfbfbf",
        secondary: "#8B8B8B",
        tertiary: "#151030",
        blue: "#5AA2FF",
        "black-100": "#3D3D3D",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        sm: '850px',
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/bakcground.jpg')",
        "bubbles-bg": "url('/src/assets/bubbles.jpg')",
      },
    },
  },
  plugins: [],
};