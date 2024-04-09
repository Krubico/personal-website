/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        floralwhite: "#f8f9f2",
        white: "#fff",
        black: "#000",
        primary: "#4361ee",
        whitesmoke: "#f2f2ec",
        gainsboro: "rgba(217, 217, 217, 0)",
      },
      spacing: {
        "spacing-sm": "0.5rem", // 8px / 16px = 0.5rem
        "spacing-md": "1rem", // 16px / 16px = 1rem
        "spacing-lg": "2rem", // 32px / 16px = 2rem
        "spacing-xl": "4rem", // 64px / 16px = 4rem
        "spacing-xxl": "8rem", // 128px / 16px = 8rem
        "main-content-padding": "6rem", // 96px / 16px = 6rem
        "spacing-between-content": "5rem", // 80px / 16px = 5rem
      },
      fontFamily: {
        manrope: "Manrope",
        aquire: "Aquire",
        "title-description": "Inter",
        "helvetica-neue": "'Helvetica Neue'",
        roboto: "Roboto",
      },
      borderRadius: {
        "11xl": "1.875rem", // 30px / 16px = 1.875rem
        "31xl": "3.125rem", // 50px / 16px = 3.125rem
        "71xl": "5.625rem", // 90px / 16px = 5.625rem
      },
    },
    fontSize: {
      sm: "1.25rem", // 20px / 16px = 1.25rem
      base: "1.75rem", // 28px / 16px = 1.75rem
      "2base-9": "3.0625rem", // 49px / 16px = 3.0625rem
      "164xl-5": "11.5rem", // 184px / 16px = 11.5rem
      "25xl-8": "2.8125rem", // 45px / 16px = 2.8125rem
      "31xl": "3.125rem", // 50px / 16px = 3.125rem
      "11xl": "1.875rem", // 30px / 16px = 1.875rem
      "52xl-7": "4.5rem", // 72px / 16px = 4.5rem
      "3xl": ["1.875rem", "2.25rem"],
      "5xl": ["3rem", "1"],
      inherit: "inherit",
    },
  },
};
