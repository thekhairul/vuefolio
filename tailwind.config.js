// tailwind.config.js
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
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
        'accent-light': 'var(--accent-light)'
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
      }
    }
  },
  variants: {
    extend: {
      translate: ['group-hover']
    }
  },
  plugins: []
};
