/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  parserOptions: { project: true },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "tailwindcss"],
  settings: {
    next: { rootDir: true },
    tailwindcss: { callees: ["cn"], config: "tailwind.config.ts" },
  },
  extends: [
    "prettier",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:@typescript-eslint/recommended-type-checked",
  ],
  rules: {
    "tailwindcss/classnames-order": "off",
    "@typescript-eslint/array-type": "off",
    "tailwindcss/enforces-shorthand": "off",
    "tailwindcss/no-custom-classname": "off",
    "@typescript-eslint/require-await": "off",
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "prettier/prettier": ["error", require("./prettier.config.cjs")],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: { attributes: false } },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports", fixStyle: "inline-type-imports" },
    ],
  },
};
