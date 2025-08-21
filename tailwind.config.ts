import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: 'var(--brand)',
        ink: 'var(--ink)',
        surface: 'var(--surface)'
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.06)',
        ring: '0 0 0 10px rgba(252,108,76,0.08)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f172a 0%, #1f2937 45%, #0b1220 100%)'
      }
    }
  },
  plugins: []
} satisfies Config
