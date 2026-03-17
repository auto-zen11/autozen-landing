/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0D0D12',
        champagne: '#C9A84C',
        ivory: '#FAF8F5',
        slate: '#2A2A35',
      },
      fontFamily: {
        title: ['"Inter"', 'sans-serif'],
        drama: ['"Playfair Display"', 'serif'],
        data: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'large': '2rem',
        'huge': '3rem',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        expand: {
          '0%, 100%': { width: '25%' },
          '50%': { width: '85%' },
        }
      }
    },
  },
  plugins: [],
}

