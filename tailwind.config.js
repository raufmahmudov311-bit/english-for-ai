/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0B0E14",
        surface: "#12161F",
        surface2: "#171C27",
        border: "#232838",
        muted: "#8B93A7",
        ink: "#E6E9EF",
        amber: {
          DEFAULT: "#E8A33D",
          soft: "#F0BE73",
        },
        cyan: {
          DEFAULT: "#4FD1C5",
          soft: "#8FE3DA",
        },
        danger: "#E5484D",
        success: "#3DD68C",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(232,163,61,0.06), transparent 60%)",
      },
    },
  },
  plugins: [],
};
