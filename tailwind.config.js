/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        lg: '1170px'
      },
      fontFamily: {
        sans: ['var(--font-mulish)'],
        serif: ['var(--font-comic-neue)'],
        script: ['var(--font-sofia)']
      },
      colors: {
        blue: {
          50: '#E3F2FA',
          100: '#C9E6F6',
          200: '#AFDAF1',
          300: '#95CDED',
          400: '#7AC1E9',
          500: '#60B5E4',
          600: '#529FCA',
          700: '#4589AF',
          800: '#387293',
          900: '#2B5C77'
        },
        yellow: {
          bg: '#F3D97C',
          50: '#FBF2D3',
          100: '#F9EDC2',
          200: '#F8E8B0',
          300: '#F6E39F',
          400: '#F5DE8E',
          500: '#F3D97C',
          600: '#E1CA77',
          700: '#D0BB71',
          800: '#BFAC6C',
          900: '#AE9E66'
        },
        orange: {
          50: '#FEEAE3',
          100: '#FCD6C9',
          200: '#FBC2AE',
          300: '#FAAF94',
          400: '#F89B79',
          500: '#F7875F',
          600: '#DB7551',
          700: '#BD6343',
          800: '#9F5236',
          900: '#80412A'
        },
        gray: {
          50: '##EAEEF4',
          100: '##D7DFE9',
          200: '##C3CFDE',
          300: '##B0BFD3',
          400: '##9DB0C8',
          500: '##89A0BD',
          600: '##778CA6',
          700: '##65788F',
          800: '##546478',
          900: '##435060'
        }
      }
    }
  },
  plugins: []
}
