/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "primary" : "Galano Grotesque",
      },
      colors: { 
        "main" : "#FF0D87",
        "tex" : "#9C9C9C",
      },
      backgroundColor : {
        "bor" : "rgba(255, 255, 255, 0.3)",
        "B77CB8" : "#B77CB8",
        "F19653" : "#F19653",
        "F07266" : "#F07266",
        "9FAE5D" : "#9FAE5D",
      },
      screens: { 
        'ipad': {'min': '768px', 'max': '1250px'},
      }
    },
  },
  plugins: [],
}

