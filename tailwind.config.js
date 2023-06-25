module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FD5A1E",
          200: "#A8AAAE",
          300: "#37CDBE",
          400: "#ffffff",
          500: "#ffffff",
          600: "#00CFE8",
          700: "#28C76F",
          800: "#FF9F43",
          900: "#EA5455",
        },
        pinky: {
          100: "#FD5A1E",
          200: "#A8AAAE",
          300: "#37CDBE",
          400: "#ffffff",
          500: "#ffffff",
          600: "#000",
          700: "#28C76F",
          800: "#FF9F43",
          900: "#FD5A1E",
        },
        // Add other colors or customize existing colors as needed
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FD5A1E",
          secondary: "#A8AAAE",
          accent: "#37CDBE",
          neutral: "#ffffff",
          "base-100": "#ffffff",
          info: "#00CFE8",
          success: "#28C76F",
          warning: "#FF9F43",
          error: "#EA5455",
        },
      },
    ],
  },
};
