/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        pastel1: "#264653",
        pastel2: "#2A9D8F",
        pastel3: "#E9C46A",
        pastel4: "#F4A261",
        pastel5: "#E76F51",
        border1: "#1d3640",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
