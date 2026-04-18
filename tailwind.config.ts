import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#ff6600',
          'orange-light': '#fcc01e',
          navy: '#153d64',
          aqua: '#9dd69c',
          sage: '#59806e',
          blue: '#4376bd',
          mauve: '#a02b93',
          slate: '#718fa2',
          black: '#000000',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        heading: ['Prompt', 'sans-serif'],
        body: ['Arial', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['2.375rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #ff6600 0%, #153d64 100%)',
      },
    },
  },
  plugins: [],
}

export default config
