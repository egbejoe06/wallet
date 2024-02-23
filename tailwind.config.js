/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body:['Damion']
      },
      colors:{
        primary:"#f1e1d4",
        main:"rgb( 241,225,212 )",
        disable:"rgb( 140,129,121)",
        bg:"#252120",
        textcolor:"rgb( 140,129,121 )",
        textdisable:"rgba( 140,129,121 ,0.4)",
        greenborder:"rgba( 37,164,24 )",
        greencolor:"rgba( 37,164,24 ,0.22)",
        redcolor:"rgba( 240,89,89 )",
        orangecolor:"rgba( 227,161,49 )",
        browncolor:"rgb( 37,33,32 )",
        buttoncolor:"rgb( 49,44,44 )",
        lightbrowncolor:"rgb( 140,129,121 )"
      },
      screens:{
        sd:"320px"
      }
    },
  },
  plugins: [],
}

