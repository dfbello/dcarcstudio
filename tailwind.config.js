/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        architect: {
          "primary": "#E8D5B0",
          "primary-content": "#0A0A0A",
          "secondary": "#8B7355",
          "accent": "#C4A882",
          "neutral": "#1A1A1A",
          "base-100": "#0A0A0A",
          "base-200": "#111111",
          "base-300": "#1A1A1A",
          "base-content": "#F5F0E8",
        },
      },
    ],
  },
}
