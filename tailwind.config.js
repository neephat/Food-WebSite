/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "green": "#39DB4A",
        "red": "#FF6868",
        "secondary": "#555",
        "prigmayBG": "#FCFCFC"
      },
      screens: {
        "xs": "600px",
        "xxs": "490px"
      }
    },
    
  },
  daisyui: {
    themes: [false],
  },
  plugins: [
    require("daisyui"),
    ({addUtilities})=> {
      addUtilities({
        '.section-container' : {
          '@apply max-w-screen-2xl container mx-auto xl:px-24 px-4' : {}
        },
        '.active' : {
          '@apply underline underline-offset-[5px] text-[#39DB4A]' : {}
        },
       '.foo-title' : {
        '@apply text-[#000000]' : {}
       },
       '.title1' : {
        '@apply text-4xl md:text-5xl md:leading-snug font-bold my-2' : {}
       },
       '.subtitle1' : {
        '@apply text-red uppercase tracking-wide font-semibold text-lg' : {}
       }
      })
      
    }
  ],
}

