/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A14', // Vacío Profundo
        primary: '#7B61FF',    // Plasma
        textGhost: '#F0EFF4',      // Fantasma
        surface: '#18181B',    // Grafito
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
