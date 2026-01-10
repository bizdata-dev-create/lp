import type { Config } from 'tailwindcss'

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: [
            '"Noto Sans JP"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Hiragino Sans"',
            '"Hiragino Kaku Gothic ProN"',
            'sans-serif',
          ],
        },
        colors: {
          'brand-blue': '#004E7C',
          'brand-blue-light': '#DBEAFE', // blue-100相当
          'brand-red': '#B91C1C', // red-700相当
          'brand-red-light': '#FEE2E2', // red-200相当
        },
        backgroundImage: {
          'marker-yellow': 'linear-gradient(rgba(255,248,0,1.0) 0%, rgba(255,248,0,1.0) 100%)',
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