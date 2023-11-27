/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        99: '0.99'
      },
      colors: {
        'my-bg': '#121829',
        'grey': {
          50: '#EBEEF5',
          200: '#A8AEBF',
          400: '#767E94',
          700: '#323B54',
          900: '#121829',
        },
        'primary': {
          400: '#7B6EF6',
        },
      },
      backgroundImage: {
        'my-image': "url('./src/assets/Background.png')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
