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
        },
      },
    },
    plugins: [],
  } satisfies Config