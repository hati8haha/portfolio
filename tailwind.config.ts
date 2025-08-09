import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bunker': {
          '50': '#f5f7fa',
          '100': '#eaeef4',
          '200': '#cfdbe8',
          '300': '#a6bed3',
          '400': '#759abb',
          '500': '#547fa3',
          '600': '#416588',
          '700': '#35516f',
          '800': '#2f465d',
          '900': '#2b3c4f',
          '950': '#0b0f14',
        },
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/typography')
  ],
  darkMode: 'class',
}
export default config
