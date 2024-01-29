const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#DCA54C',
        'dark-blue': '#001F29',
      },
      backgroundImage: {
        'bg-illustration': 'url("/assets/bg-illustration.svg")',
        'bg-illustration-dark': 'url("/assets/bg-illustration-dark.svg")',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      listStyleImage: {
          'li-point': 'url("/assets/li-point.svg")',
          'li-point-dark': 'url("/assets/li-point-dark.svg")',
          'dark:li-point': 'url("/assets/li-point-dark.svg")',
      },
    },
  },
  plugins: [],
};
