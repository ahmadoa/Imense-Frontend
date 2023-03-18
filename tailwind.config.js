/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light"],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lighter_gray: "#F6F6F6",
        light_gray: "#C6C6C6",
        medium_gray: "#B6B6B6",
        dark_gray: "#BEBEBE",
        darker_gray: "#616161",
        dark: "#7c7c7c",
        darker: "#616161",
        darkest: "#313131",
        bell_gray: "#A4A4A4",
        control_gray: "#f1f1f1",
        dark_blue: "#2C8EFF",
        light_blue: "#E1EFFF",
        question_bg: "#F8F8F8",
        question_border: "#EBEBEB",
        add_question: "#E1EFFF",
      },
    },
  },
  plugins: [require("daisyui")],
};
