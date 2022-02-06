module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        ss: "400px"
      },
      colors: {
        karkadeGray: "#F1F1F1",
        darkTransparent: "rgba(0, 0, 0, 0.5)"
      },
    },
  },
  plugins: [],
}