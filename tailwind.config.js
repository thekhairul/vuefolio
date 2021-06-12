// tailwind.config.js
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'background-dark': 'var(--background-dark)',
        'background-light': 'var(--background-light)',
        'color-dark': 'var(--color-dark)',
        'color-light': 'var(--color-light)',
        'accent-dark': 'var(--accent-dark)',
        'accent-light': 'var(--accent-light)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
