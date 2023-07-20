/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
    },
  },
  plugins: [],
};
