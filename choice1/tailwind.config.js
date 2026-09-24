/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#060608',
        bg2: '#0a0b0e',
        panel: '#0c0d11',
        line: 'rgba(255, 255, 255, 0.08)',
        line2: 'rgba(255, 255, 255, 0.14)',
        blue: {
          DEFAULT: '#FF6B00',
          2: '#CC5500',
        },
        cyan: '#FF6B00',
        white: '#f4f5f7',
        dim: '#8b9099',
        dim2: '#555a63',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'Menlo', 'monospace'],
        display: ['Space Grotesk', 'JetBrains Mono', 'ui-monospace', 'sans-serif'],
      },
      transitionTimingFunction: {
        'kiro-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
