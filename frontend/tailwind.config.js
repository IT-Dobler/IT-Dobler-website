const {createGlobPatternsForDependencies} = require('@nx/angular/tailwind');
const {join} = require('path');

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
                'itd-black': '#09090B',
                'gold': '#DCA54C',
                'light-gold': '#F5E4C9',
            },
            fontFamily: {
                'orbitron': ['Orbitron', 'sans-serif'],
                'roboto': ['Roboto', 'sans-serif'],
            },
            listStyleImage: {
                'list-point-gold': 'url("/assets/images/list-point-gold.svg")',
                'list-point-light-gold': 'url("/assets/images/dark-mode/list-point-light-gold.svg")',
                'list-point-white': 'url("/assets/images/light-mode/list-point-white.svg")',
            },
        },
    },
    plugins: [],
};
