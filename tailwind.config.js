/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'verde-petroleo': '#1C7C64',
        'azul-profundo': '#1B3D4B',
        'dourado-claro': '#E8C96A',
        'branco-institucional': '#F9FAFB',
        'cinza-suave': '#6B6B6B',
        // Variações úteis
        'verde': {
          DEFAULT: '#1C7C64',
          hover: '#15655a',
        },
        'azul': {
          DEFAULT: '#1B3D4B',
          hover: '#142e38',
        },
        'dourado': {
          DEFAULT: '#E8C96A',
          hover: '#d4b556',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
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
      },
    },
  },
  plugins: [],
}

