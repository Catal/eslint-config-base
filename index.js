module.exports = {
  globals: {},
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true
  },
  extends: [
      'airbnb', 
      'airbnb/hooks', 
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'import/extensions': 'off',
    //export defaultしたcomponentを使う側が自由に命名できることによって、
    //そのコンポーネントの命名が使い手側によって解釈されて意図しない命名になってしまうことを防ぎたい
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    //Forbid the use of extraneous packages
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['.storybook/**', 'stories/**']
      }
    ],
    //Enforce a defaultProps definition for every prop that is not a required prop 
    'react/require-default-props': 'off',
    //Restrict file extensions that may contain JSX 
    'react/jsx-filename-extension': ['error', {extensions: ['.jsx', '.tsx']}],
    //Require parens in arrow function arguments
    'arrow-parens': ['error', 'as-needed', {requireForBlockBody: true}],
    //Require or disallow trailing commas
    'comma-dangle': ['error', 'never'],
    //Enforce consistent linebreak style
    'linebreak-style': ['error', 'unix'],
    //Enforce consistent linebreak style for operators
    'operator-linebreak': ['error', 'after'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    //Require or disallow a space before function parenthesis
    'space-before-function-paren': ['error', 'always'],
    //Disallow Early Use(functions, classes, variables)
    'no-use-before-define': 'off',
    //Enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': ['error', 'prefer-single'],
    //Enforce onClick is accompanied by at least one of the following: onKeyUp, onKeyDown, onKeyPress
    'jsx-a11y/click-events-have-key-events': 'off',
    //Enforce that a label tag has a text label and an associated control.
    'jsx-a11y/label-has-associated-control': 'off',
    //Consistent with type definition either interface or type
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    //Require explicit return types on functions and class methods
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
      }
    ],
    //Enforce consistent indentation
    '@typescript-eslint/indent': 'off',
    //Require a specific member delimiter style for interfaces and type literals
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
    //Disallow the use of variables before they are defined
    '@typescript-eslint/no-use-before-define': ['error'],
    //Prefer an interface declaration over a type literal 
    '@typescript-eslint/prefer-interface': 'off'
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
