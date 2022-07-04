module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.8)",
      },
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      'nightpurple-100': '#8b8c9a',
      'nightpurple-500': '#674f80',
      'nightpurple-700': '#a57ca8',
      'nightpurple-900': '#1b102d',
    }
  },
  plugins: [],
};
