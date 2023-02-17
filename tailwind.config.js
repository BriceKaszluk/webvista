/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      variants: { translate: ['group-hover'] },
      backgroundImage: {
        'main': "url('https://cdn.pixabay.com/photo/2017/08/23/11/30/background-2672565_960_720.jpg')",
        'myPicture': "url('../public/assets/brice-photo.png')",
      },
      colors: {
        'section': '#002D62',
        'interSection': '#0B1A2E',
        'modal': '#214276',
      },
      height: {
        'screen/2': '60vh',
      }
    }
  },
  plugins: [
  ],
}