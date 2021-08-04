module.exports = {
  purge: ["./pages/**/*.tsx"],
  theme: {
    extend: {
      fontSize: {
        xxs: ".65rem",
      },
      animation: {
        "slow-bounce": "bounce 2s infinite",
      },
      backgroundImage: {
        home: "url('https://rajdevkar.github.io/assets/images/bg.png')",
      },
    },
    fontFamily: {
      primary: "'Press Start 2P'",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
