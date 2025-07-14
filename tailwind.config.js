/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D5AD45",
        "primary-foreground": "#241836",
        secondary: "#F6F6F6",
        "secondary-foreground": "#000000",
        black: "#000000",
        white: "#FFFFFF",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "1rem",
        },
      },
      maxWidth: {
        "2xl": "1536px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
