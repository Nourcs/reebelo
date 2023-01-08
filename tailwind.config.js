/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#242526', // Default Dark
          800: '#474747',
          700: '#595959',
          600: '#6B6B6B', // Dark Gray on White Background / Subheader on Dark Background
          500: '#909090', // Labels
          400: '#B5B5B5', // Subheader + Details/Info
          300: '#DADADA', // Borders (2) + Placeholders + Separations
          200: '#ECECEC', // Background Hover + Border (1)
          100: '#F4F4F4',
          50: '#FAFAFA',
        },
        main: {
          500: '#457b9d',
        },
      },
    },
  },
  plugins: [],
};
