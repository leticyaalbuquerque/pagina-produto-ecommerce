/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}", "index.html", "script.js"],
  theme: {
    extend: {
      colors: {
        'laranja': '#ff7d1a',
        'laranja-claro': '#ffede0',
        'azul-escuro': '#001642',
        'azul-escuro-acinzentado': '#68707d',
        'azul-acinzentado': '#b6bcc8',
        'azul-claro-acinzentado': '#f7f8fd'
      },
      fontFamily: {
        'kumbh': ['Kumbh Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
