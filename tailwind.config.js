/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-md': "url('/img/hero.png')",
        'hero-mobile': "url('/img/hero.png')",
      },
      colors: {
        primary: {
          100: '#FF7D7D',
          200: '#FF7D7D',
          300: '#FF6464',
        },
        secondary: {
          100: '#F8FFDB',
          200: '#B3FFAE',
          300: '#B3FFAE',
        },
      }
    },
  },
  plugins: [],
}

