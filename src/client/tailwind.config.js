module.exports = {
  mode: 'jit',
  purge: {
    //enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  darkMode: false, // 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
