module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          facebook: "#3b5998",
          google: "#ea4335",
          youtube: "#ff0000",
          tiktok: "#000000",
          linkedIn: "#0077b5",
          twitter: "#1da1f2",
          twitch: "#9146ff",
          instagram: "#f56040",
          skype: "#00aff0",
          messenger: "#0084ff",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
