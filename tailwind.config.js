/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        apple: {
          bg: '#07080c',
          card: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
          blue: '#007AFF',
          purple: '#AF52DE',
          cyan: '#5468FF',
          accent: '#30B0C7',
          silver: '#E5E5EA',
          gray: '#8E8E93',
          darkGray: '#1C1C1E',
        }
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Inter',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
        mono: [
          'SF Mono',
          'Fira Code',
          'JetBrains Mono',
          'monospace'
        ]
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0, 122, 255, 0.4))' },
          '100%': { opacity: '0.8', filter: 'drop-shadow(0 0 30px rgba(175, 82, 222, 0.7))' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
