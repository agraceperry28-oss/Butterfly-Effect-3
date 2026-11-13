/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070b17',
        panel: '#0e1526',
        edge: '#1c2744',
        glow: '#2de2d0',
        arc: '#4f8cff',
        haze: '#9b7bff',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0.6)', opacity: '0.7' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        dash: { to: { strokeDashoffset: '-24' } },
      },
      animation: {
        ripple: 'ripple 3.2s ease-out infinite',
        dash: 'dash 1.6s linear infinite',
      },
    },
  },
  plugins: [],
}
