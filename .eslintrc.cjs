/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:unicorn/recommended',
  ],
  rules: {
    "semi": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    'unicorn/prevent-abbreviations': [
      'error',
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
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    },
    {
      files: ["*.vue", "*.Spec.ts"],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            case: 'pascalCase',
          },
        ]
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
