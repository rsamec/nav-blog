import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'ship-pattern': "url('/img/big-kalkomey.jpg')",
        'watter-blue-0':'linear-gradient(to right bottom, #dde7f6, #c4d9f8, #abcbfa, #90bdfc, #72affd)',
        'watter-blue-1':'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
        'watter-blue-2': 'linear-gradient(to right bottom, #0d3c81, #0a479b, #0851b5, #0a5cd0, #1267eb)'
      },
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        
      },
    },
  },
  plugins: [],
  //darkMode: 'class',
}
export default config
