import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0D0E0F", surface: "#151719", line: "#272A2D",
        paper: "#F3F1EA", mist: "#A7AAA8", amber: "#E7A83B", teal: "#6FB7A5",
      },
      fontFamily: {
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
        display: ['"Space Grotesk Variable"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
