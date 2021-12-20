module.exports = {
  root: true,
  ignorePatterns: ["**/*", "!/*.js"],

  extends: [
    "plugin:unicorn/recommended",
    "plugin:you-dont-need-lodash-underscore/compatible",
    "plugin:prettier/recommended",
  ],
  rules: {
    "tsdoc/syntax": "warn",
    "id-length": 0,
    "babel/object-curly-spacing": 0,
    "@typescript-eslint/prefer-optional-chain": ["error"],
    "unicorn/no-null": 0,
    "unicorn/no-useless-undefined": 0,
    "unicorn/filename-case": 0,
    "unicorn/prefer-node-protocol": 0,

    //TODO: turn these on in the future
    "unicorn/no-abusive-eslint-disable": 0,
    "unicorn/numeric-separators-style": 0,
    "@next/next/no-html-link-for-pages": 0,
    "unicorn/consistent-destructuring": 0,
    "unicorn/consistent-function-scoping": 0,
    "unicorn/prefer-includes": 0,
    "unicorn/prefer-module": 0,
    "unicorn/no-array-reduce": 0,
    "unicorn/no-nested-ternary": 0,
    "unicorn/prefer-array-some": 0,
    "unicorn/prefer-string-slice": 0,
    "unicorn/prevent-abbreviations": 0,
    "unicorn/prefer-switch": 0,
    "unicorn/prefer-ternary": 0,
  },
};
