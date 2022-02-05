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
      }
    },
  },
  plugins: [],
}