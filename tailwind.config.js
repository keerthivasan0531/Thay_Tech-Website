/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-right-to-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-left-to-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "right-to-left": "slide-right-to-left 0.5s ease-in-out forwards",
        "left-to-right": "slide-left-to-right 0.5s ease-in-out forwards",
      },
      zIndex: {
        1: "1",
        2: "2",
      },
      transitionTimingFunction: {
        ease: "ease",
      },
      animation: {
        fadeInLeft: "fadeInLeft 4s ease-out",
        fadeInRight: "fadeInRight 4s ease-out",
        fadeIn: "fadeIn 2s ease-out forwards",
        /* home page and service page */
        downToUp: "downToUp 2s ease-out forwards",
        fadeInLeft: "fadeInLeft 2s ease-out",
        rightToLeft: "rightToLeft 2s ease-out forwards",
        "fade-in": "fade-in 0.5s ease forwards",
        "right-to-left": "right-to-left 0.5s ease forwards",
        "right-to-left": "right-to-left 1s ease-in-out",
        "left-to-right": "left-to-right 1s ease-in-out",
      },
      keyframes: {
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        /* home page and service page */
        downToUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        rightToLeft: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-right-to-left": {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-left-to-right": {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "right-to-left": {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      fontFamily: {
        georgia: ["Georgia", "serif"],
        body: ["Poppins"],
        
      },
      transitionDuration: {
        2000: "2000ms",
      },
      colors: {
        "overlay-gradient": "rgba(37, 37, 37, 0.5)",
      },
      backdropBlur: {
        "6px": "6px",
      },
      transitionTimingFunction: {
        "in-out": "ease-in-out",
      },
      textShadow: {
        custom: "2px 2px 8px rgba(0, 0, 0, 0.8)", // Add your custom text-shadow here
        subtext: "1px 1px 6px rgba(0, 0, 0, 0.6)", // Add this new one for subtext
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-custom": {
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
        },
        ".text-shadow-subtext": {
          textShadow: "1px 1px 6px rgba(0, 0, 0, 0.6)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
