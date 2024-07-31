/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bcDarkBlue': '#010F26',
        'bcWhite': '#FAFBFB',
        'bcBrightBluw': '#08A7F1',
        'bcDeepRed': '#D32F3F',
        'bcGrayishBlue': '#B5C4D8',
        'bcMediumGray': '#576779'
      },
    },
  },
  darkMode: 'media', // or 'class'
  plugins: [],
}
