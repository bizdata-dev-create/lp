import type { Config } from 'tailwindcss'

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'brand-blue': '#002672',
          'brand-blue-light': '#DBEAFE', // blue-100相当
          'brand-red': '#B91C1C', // red-700相当
          'brand-red-light': '#FEE2E2', // red-200相当
        },
        backgroundImage: {
          'marker-yellow': 'linear-gradient(transparent 50%, rgba(255,235,59,0.6) 50%)',
        },
        screens: {
          // スマホ/PC判定基準をmd（768px）に統一
          'mobile': '0px',
          'desktop': '768px', // md相当
        },
      },
    },
    plugins: [],
  } satisfies Config