/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'islamic-green': {
          50: '#E8F8F5',
          100: '#D5F3EC',
          200: '#AAE6D8',
          300: '#7DD3C0',
          400: '#52C1A7',
          500: '#16A085',
          600: '#138D75',
          700: '#117A65',
          800: '#0E6655',
          900: '#0B5345'
        },
        'islamic-gold': {
          50: '#FEF9E7',
          100: '#FCF3CF',
          200: '#F9E79F',
          300: '#F7DC6F',
          400: '#F4D03F',
          500: '#F39C12',
          600: '#E67E22',
          700: '#D68910',
          800: '#B7950B',
          900: '#9A7D0A'
        }
      },
      fontFamily: {
        'amiri': ['Amiri', 'serif'],
        'cairo': ['Cairo', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};