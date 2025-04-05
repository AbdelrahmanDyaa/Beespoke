/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#F5F5DD",
        dirtyWhite: "#ECE7CA",
        dutchWhite: "#E3D8B7",
        darkVanilla: "#DACAA4",
        tan: "#D1BB91",
        lightFrenchBeige: "#C8AD7E",
        khakiWeb: "#C3B091",
        caféAuLait: "#A67B5B",
        darkBrown: "#7F5539",
        espresso: "#4B3621",
      },
      fontFamily: {
        oswald:  ['Poppins', 'sans-serif'],
        playfair: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semi: 600,
        bold: 700,
      },
      fontSize: {
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "2rem", // 32px
        "4xl": "2.5rem", // 40px
        "5xl": "3rem", // 48px
        "6xl": "3.75rem", // 60px

      },
    },
  },
  plugins: [],
}