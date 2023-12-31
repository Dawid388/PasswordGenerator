/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.green.100')},
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),  

    },
  },
  plugins: [require("daisyui")],
}
