/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Blue for Admin
        secondary: '#15803D', // Green for Driver
        accent: '#F59E0B', // Yellow for Customer
      },
    },
  },
  plugins: [],
};