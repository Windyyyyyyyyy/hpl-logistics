/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'sm-txt': '13px',
        body: '16px', // Base size
        'sub-heading': '20px',
        h3: '25px',
        h2: '32px',
        h1: '40px',
      },
      colors: {
        'custom-blue': '#2761d8',
      },
      boxShadow: {
        'featured-card': '0px 0px 14px rgba(136, 159, 229, 0.2)',
      },
    },
  },
  plugins: [],
};
