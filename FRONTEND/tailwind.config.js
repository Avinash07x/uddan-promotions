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
        // Testimonials
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marqueeReverse 35s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "marquee-fast": "marquee 20s linear infinite",
        "marquee-reverse-slow": "marqueeReverse 60s linear infinite",
        "marquee-reverse-fast": "marqueeReverse 20s linear infinite",

        // Tech Stack
        "marquee-left": "marqueeLeft 30s linear infinite",
        "marquee-right": "marqueeRight 30s linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },

        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
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