/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      colors: {
        "container-color": "var(--container-color)",
        "title-color": "var(--title-color)",
        "title-color-dark": "var(--title-color-dark)",
        "body-color": "var(--body-color)",
        "text-color": "var(--text-color)",
        "bg-color": "var(--bg-color)",
        "border-color": ({ opacityValue }) => {
          return `rgba(var(--border-color), ${opacityValue})`
        },
      },
      boxShadow: {
        header: '0 0 4px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}