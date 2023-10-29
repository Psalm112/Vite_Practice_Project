/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        offwhite: "#f9f9f9",
      },
      keyframes: {
        fillIn: {
          "0%": { height: "0%" },
          "50%": { height: "50%", width: "0%" },
          "100%": { width: "30%" },
        },
      },
    },
  },
  plugins: [],
};
