/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#058fff",
          secondary: "#063a65",
          "secondary-content": "#aedafe",
          accent: "#ffb347",
          neutral: "#1B2946",
          "base-100": "#000e1a",
          "base-200": "#001629",
          "base-300": "#001e38",
          info: "#0284c7",
          success: "#059669",
          warning: "#ea580c",
          error: "#be123c",
        },
      },
    ],
  },
}
