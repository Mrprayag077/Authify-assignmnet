/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include the root HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the src directory
  ],
  theme: {
    extend: {
      animation: {
        "float-slow": "floatSlow 5s ease-in-out infinite", // Slower floating animation
      },
      keyframes: {
        floatSlow: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
