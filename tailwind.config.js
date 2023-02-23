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
        'siteShowCase': "url('https://cdn.pixabay.com/photo/2018/04/30/08/20/business-3362103__340.png')",
        'siteShop': "url('https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603__340.jpg')",
        'siteOthers': "url('https://cdn.pixabay.com/photo/2018/03/17/10/51/post-it-notes-3233653__340.jpg')",
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