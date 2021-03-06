module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'prettier', 'react-hooks'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
      fragment: 'Fragment',
    },
  },
  rules: {
    semi: 'error',
    'no-var': 'error',
    'no-undef': 'error',
    'no-console': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',
    'newline-before-return': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'prettier/prettier': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/display-name': 'off',
    'react/jsx-filename-extension': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    'react/prop-types': ['error', { ignore: ['route', 'navigation'] }],
  },
};
