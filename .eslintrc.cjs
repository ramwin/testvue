/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:unicorn/recommended",
  ],
  rules: {
    "comma-spacing": [
      "error", {
        "before": false,
        "after": true,
      }
    ],
    "eqeqeq": ["error", "always"],
    "key-spacing": [
      1, {
        "singleLine": {
          "beforeColon": false,
          "afterColon": true,
        },
        "multiLine": {
          "beforeColon": false,
          "afterColon": true,
        }
      }
    ],
    "no-unused-vars": ["error"],
    "object-curly-spacing": ["error", "always"],
    "quotes": ["error", "double"],
    "semi": ["error", "never"],
    "unicorn/prevent-abbreviations": [
      "error",
      {
        allowList: {
          ref: true,
          env: true,
          Ref: true,
        },
      },
    ]
  },
  overrides: [
    {
      files: [
        "cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}"
      ],
      "extends": [
        "plugin:cypress/recommended"
      ]
    },
    {
      files: ["*.vue", "*.Spec.ts"],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            case: "pascalCase",
          },
        ]
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest"
  }
}
