/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "1024px": "1024px",
      },
      colors: {
        blue: "#0071f8",
        rose: "#ee626b",
      },
    },
    container: {
      center: true,
      padding: "3rem",
    },
  },
  plugins: [],
};
