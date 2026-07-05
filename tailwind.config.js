/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Space Grotesk"', "sans-serif"],
        sans: ['"IBM Plex Sans"', "sans-serif"],
      },
      colors: {
        bg: "#0B0E0C",
        surface: "#12160F",
        border: "rgba(255, 255, 255, 0.08)",
        text: "#EDE9E0",
        "text-muted": "#A6A398",
        heading: "#F6F3EA",
        accent: "#33D17A",
        "accent-hover": "#6EE6A6",
        "accent-dim": "#1F5C3D",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
}
