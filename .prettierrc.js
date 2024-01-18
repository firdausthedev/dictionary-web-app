const styleguide = require("@vercel/style-guide/prettier");

module.exports = {
  ...styleguide,
  bracketSpacing: true,
  bracketSameLine: true,
  singleQuote: false,
  trailingComma: "all",
  arrowParens: "avoid",
  plugins: [...styleguide.plugins, "prettier-plugin-tailwindcss"],
};
