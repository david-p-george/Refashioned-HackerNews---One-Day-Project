module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'ptSans': ['PT Sans Narrow', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'hnOrange': 'rgb(255, 102, 0)',
        'redCrayola': '#EF2D56',
        'mantis': '#8CD867'
      }
    },
  },
  plugins: [],
}
