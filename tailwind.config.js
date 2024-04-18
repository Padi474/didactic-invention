/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: 0,
        width:'100%',
      
      },
      fontFamily: {
        'Iransans': "iranSans",
        'IransansBold': `IransansBold`,
      },
      backgroundImage: {
        'picture': "url('../images/back1.jpg')",
    },
    dropShadow:{
      "textShadow": '3px 0px 6px black' 
    },
    keyframes: {
      fade: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
      animation: {
        fade: 'fade 3s 2 ease-in-out',
      } 
  
    
  },
  plugins: [],
}
}
