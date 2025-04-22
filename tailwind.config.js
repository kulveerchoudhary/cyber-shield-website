/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0FF',
          100: '#CCE1FF',
          200: '#99C3FF',
          300: '#66A5FF',
          400: '#3387FF',
          500: '#0A84FF', // Main primary color
          600: '#0066CC',
          700: '#004D99',
          800: '#003366',
          900: '#001A33',
        },
        secondary: {
          50: '#E6FFF9',
          100: '#CCFFF3',
          200: '#99FFE8',
          300: '#66FFDC',
          400: '#33FFD1',
          500: '#00E88F', // Main secondary color
          600: '#00B86F',
          700: '#00884F',
          800: '#005830',
          900: '#002C18',
        },
        danger: {
          500: '#FF3B30', // Alert/danger color
        },
        warning: {
          500: '#FF9500', // Warning color
        },
        success: {
          500: '#34C759', // Success color
        },
        dark: {
          50: '#E6E6E6',
          100: '#CCCCCC',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#121212', // Main dark color
          600: '#0E0E0E',
          700: '#0A0A0A',
          800: '#070707',
          900: '#030303',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-primary': '0 0 15px -3px rgba(10, 132, 255, 0.5)',
        'glow-secondary': '0 0 15px -3px rgba(0, 232, 143, 0.5)',
        'glow-danger': '0 0 15px -3px rgba(255, 59, 48, 0.5)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 2s linear infinite',
        'scanline-horizontal': 'scanline-horizontal 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'scanline-horizontal': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};