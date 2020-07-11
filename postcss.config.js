module.exports = {
  syntax: "postcss-scss",
  plugins: {
    "postcss-import": {},
    // "postcss-modules": {},
    precss: {},
    cssnano: {},
  },
};

// PreCSS is powered by the following plugins (in this order):

// postcss-extend-rule
// postcss-advanced-variables
// postcss-preset-env
// postcss-atroot
// postcss-property-lookup
// postcss-nested
