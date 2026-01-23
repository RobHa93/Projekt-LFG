/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['NouvelR Bold', 'sans-serif'],
        'nouvelr': ['NouvelR Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
