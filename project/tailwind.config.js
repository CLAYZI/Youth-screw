/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'],  // Police Bebas Neue
        'newrocker': ['"New Rocker"', 'sans-serif'],  // Police New Rocker
      },
    },
  },
  plugins: [],
};

