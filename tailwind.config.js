/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Add this if using `src` folder structure
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/data/**/*.{js,ts,jsx,tsx}", // Ensure data files with embedded JSX/TSX are included
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include all `src` files
  ],
  theme: {
    extend: {
      colors: {
        base: "#1A202C",
        primary: "#028A0F", // Primary emerald green color
        tan_primary: "#1a6d22ff", // Updated to emerald green
        bg_green: "#ffffff", // Changed to pure white
        muted_primary: "#8aec94ff", // Updated to emerald green
        secondary: "#718096",
        muted: "#3d3d3d",
        success: "#3fef51ff", // Updated to match emerald green
        warning: "#D69E2E",
        error: "#E53E3E",
      },

      fontFamily: {
        sans: ["Brandon Grotesque", "Arial", "sans-serif"], // Brandon Grotesque primary font
      },
    },
  },
  plugins: [],
};
