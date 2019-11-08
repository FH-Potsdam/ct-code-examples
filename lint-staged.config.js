module.exports = {
  "*.js?(x)": () => 'eslint "./packages*/**/*.js?(x)"',
  // '*.tsx': () => 'tslint',
  "**/*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|mdx|graphql|vue)": [
    "prettier --write",
    "git add",
  ],
};
