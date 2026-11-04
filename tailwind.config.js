/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rose: { 50: "#FCF6F4", 100: "#F8EAE6", 200: "#EFD6CF", 300: "#E4BDB3" },
        wine: { 700: "#5B3A3F", 800: "#472D31", 900: "#33201F" },
        gold: { 300: "#DDBF86", 400: "#CBA55F", 500: "#B38840", 600: "#8F6B2B" },
        ink: "#3A2B2B",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        script: ['"Great Vibes"', "cursive"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
