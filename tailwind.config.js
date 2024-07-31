/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Satisfy' : ["Satisfy", 'cursive'],
        'Dancing' : ["Dancing Script", 'cursive'],
        'Indie' : ["Indie Flower", 'cursive'],
        'Kalam' : ["Kalam", 'cursive'],
      }
    },
  },
  plugins: [],
}
)
