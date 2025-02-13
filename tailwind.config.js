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
        primary: "#466d1d", // Primary green color
        tan_primary: "#657a42",
        bg_green: "#edf1e9",
        muted_primary: "#ccd7b9",
        secondary: "#718096",
        muted: "#3d3d3d",
        success: "#38A169",
        warning: "#D69E2E",
        error: "#E53E3E",
      },

      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // Replace with your desired font
      },
    },
  },
  plugins: [],
};
