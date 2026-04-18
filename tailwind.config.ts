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
          pink: '#F28FE0',
          'pink-light': '#FFB8F2',
          'pink-dark': '#B86CAA',
          blue: '#2F54DD',
          'blue-light': '#A2EED5',
          black: '#000000',
          white: '#FFFFFF',
          gray: '#727272',
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
        'gradient-brand': 'linear-gradient(135deg, #F28FE0 0%, #2F54DD 100%)',
      },
    },
  },
  plugins: [],
}

export default config
