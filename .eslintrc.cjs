/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "plugin:unicorn/recommended",
    // "prettier",
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
    ],
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 4
      },
      "multiline": {
        "max": 1
      }
    }],
    "vue/multi-word-component-names": "off",
    "vue/mustache-interpolation-spacing": "error",
    "vue/singleline-html-element-content-newline": ["error", {
      "ignoreWhenNoAttributes": true,
      "ignoreWhenEmpty": true,
      "ignores": ["pre", "textarea", "RouterLink"],  // routerlink用的比较多，我喜欢只放一行
      "externalIgnores": []
    }],
    // "vue/no-multi-spaces": "error",
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
