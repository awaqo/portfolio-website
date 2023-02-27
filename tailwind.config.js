/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        dark: '#0f172a',
        secondary: '#64748b',
        primary: '#0ea5e9',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
