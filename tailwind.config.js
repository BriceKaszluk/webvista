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
        'main': "url('../public/assets/main-background.webp')",
        'myPicture': "url('../public/assets/brice-photo.webp')",
      },
      colors: {
        'section': '#002D62',
        'interSection': '#0B1A2E',
        'modal': '#214276',
      },
      height: {
        'screen/2': '60vh',
        'screen/3': '40vh',
      }
    }
  },
  plugins: [
  ],
}