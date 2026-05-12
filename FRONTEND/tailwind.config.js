/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },

      animation: {
        marquee: "marquee 20s linear infinite",
        "marquee-reverse": "marqueeReverse 20s linear infinite",

        "marquee-slow": "marquee 40s linear infinite",
        "marquee-fast": "marquee 12s linear infinite",

        "marquee-left": "marqueeLeft 25s linear infinite",
        "marquee-right": "marqueeRight 25s linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },

        marqueeReverse: {
          "0%": { transform: "translate3d(-50%, 0, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },

        marqueeLeft: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" },
        },

        marqueeRight: {
          "0%": { transform: "translate3d(-20%,0,0)" },
          "100%": { transform: "translate3d(0,0,0)" },
        },
      },
    },
  },

  plugins: [typography],
};