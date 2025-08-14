import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1fb6ff', // electric blue
          dark: '#009ee0',
        },
        accent: {
          DEFAULT: '#39ff14', // neon green
          orange: '#ff9900',
        },
        background: {
          DEFAULT: '#18181b', // dark gray
          light: '#23232a',
        },
        text: {
          DEFAULT: '#f4f4f5', // light gray
          dark: '#18181b',
        },
        secondary: {
          DEFAULT: '#3f3f46', // soft gray
        },
      },
      fontFamily: {
  sans: ['Fira Mono', ...fontFamily.mono],
  inter: ['Inter', ...fontFamily.sans],
  montserrat: ['Montserrat', ...fontFamily.sans],
  orbitron: ['Orbitron', ...fontFamily.sans],
  tektur: ['Tektur', ...fontFamily.sans],
  mono: ['Fira Mono', ...fontFamily.mono],
  fira: ['Fira Mono', ...fontFamily.mono],
  funnel: ['Funnel Display', ...fontFamily.sans],
    },
    },
  },
  plugins: [],
}
