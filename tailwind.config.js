/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: ['./src/**/*.{html,js,ts}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: '#592a37',
      black: colors.black,
      red: colors.red,
      slate: colors.slate,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.pink,
      cuisinea: {
        50: '#faf5f7',
        100: '#f7ecf1',
        200: '#f0dae4',
        300: '#e6bbcd',
        400: '#d591ac',
        500: '#c56f8e',
        600: '#b05270',
        700: '#964059',
        800: '#7d374a',
        900: '#592a37',
      },
    },
  },
  plugins: [],
}
