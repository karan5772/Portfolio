/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:  '#F5EDE0',
        paper:  '#EDE2CF',
        card:   '#FBF7F0',
        rim:    '#D8CDB8',
        ink:    '#1D160D',
        dim:    '#8A7B6C',
        sage:   '#2A6049',
        amber:  '#C87533',
        'sage-light':  '#E8F0EB',
        'amber-light': '#FDF0E0',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"Inter"',            'sans-serif'],
        mono:  ['"DM Mono"',          'monospace'],
      },
    },
  },
  plugins: [],
}
