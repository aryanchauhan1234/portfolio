/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0f",
        midnight: "#1a1a2e",
        navy: "#16213e",
        indigo: "#0f3460",
        storm: "#533483",
        aqua: "#00d4aa",
        mint: "#7fffd4",
        royal: "#6a4c93",
        lavender: "#c06c84",
        fuchsia: "#f67280",
        orange: "#f8b500",
        sand: "#ffd23f",
        coral: "#ff6b6b",
      },
    },
  },
  plugins: [],
};
