/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.js', './src/components/**/*.js'],
  theme: {
    colors: {
      stone200: '#fef2f2',
      stone100: '#f5f5f4',
      neutral50: '#fafafa',
      blue: '#3b82f6',
      red: '#f43f5e',
      zinc: '#f9fafb',
      red300: '#fecaca',
      teal: '#99f6e4',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
