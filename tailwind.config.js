module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
      Manrope: ['Manrope', 'Syne']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')],
}
