module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],
  },
  theme: {
    extend: {
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
