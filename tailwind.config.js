import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  plugins: [nextui()],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        standalone: { raw: "(display-mode: standalone)" },
        "sm-280": "280px",
        "sm-320": "320px",
        "sm-360": "360px",
        "sm-390": "390px",
        "sm-414": "414px",
        "sm-480": "480px",
        "sm-540": "540px",
        "sm-640": "640px",
        "md-768": "768px",
        "md-820": "820px",
        "md-912": "912px",
        "lg-1024": "1024px",
        "lg-1200": "1200px",
        "lg-1366": "1366px",
        "xl-1440": "1440px",
        "xl-1920": "1920px",
        "xl-2560": "2560px",
      },
      keyframes: {
        rotate_item: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "scale(1 1.5)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        rotate_item: "rotate_item 20s infinite",
        "gradient-x": "gradient-x 5s ease infinite",
        "gradient-y": "gradient-y 5s ease infinite",
        "gradient-xy": "gradient-xy 5s ease infinite",
      },
    },
  },
};
