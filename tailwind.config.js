module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],
  },
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cover-photo': "url('./ansel_melly.jpg')"
       }),
      colors: {
        orange: {
          500: "#ff3e00",
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
