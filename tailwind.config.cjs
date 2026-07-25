module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gov: {
          dark: "#081B33",
          purple: "#6B5BFF",
          blue: "#3B82F6",
        },
      },
      fontFamily: {
        sans: ["Atkinson", "Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
