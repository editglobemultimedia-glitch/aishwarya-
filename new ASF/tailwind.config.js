/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF8',
          100: '#FAF7F0',
          200: '#F5EFE0',
          300: '#EDE0C8',
        },
        maroon: {
          DEFAULT: '#7C1724',
          dark: '#5E101B',
          light: '#9B1F2E',
          50: '#FDF2F3',
          100: '#FBDFE2',
        },
        gold: {
          antique: '#C68A28',
          champagne: '#E5B85C',
          light: '#F0D080',
          dark: '#A67220',
        },
        navy: {
          DEFAULT: '#082C4D',
          light: '#0D3D6B',
          dark: '#051E35',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'mandala-pattern': "url('/images/mandala-pattern.svg')",
        'hero-gradient': 'linear-gradient(to right, rgba(250,247,240,0.97) 45%, rgba(250,247,240,0.7) 65%, rgba(250,247,240,0) 85%)',
      },
    },
  },
  plugins: [],
}
