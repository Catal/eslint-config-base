module.exports = {
  globals: {},
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'arrow-parens': ['error', 'as-needed', {requireForBlockBody: true}],
    'comma-dangle': ['error', 'never'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['.storybook/**', 'stories/**']
      }
    ],
    'linebreak-style': ['error', 'unix'],
    'operator-linebreak': ['error', 'after'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-filename-extension': ['error', {extensions: ['.jsx', '.tsx']}],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
      }
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/prefer-interface': 0
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ]
}
