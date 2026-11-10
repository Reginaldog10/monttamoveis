/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#00A86B',
          greenDark: '#066839',
          greenLight: '#E6F6F0',
          black: '#111111',
          grayLight: '#F5F7F6',
          grayText: '#6B7280',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Manrope"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(17, 17, 17, 0.05)',
        'card': '0 10px 30px -5px rgba(17, 17, 17, 0.07)',
        'card-hover': '0 20px 40px -10px rgba(0, 168, 107, 0.14)',
      }
    },
  },
  plugins: [],
}

