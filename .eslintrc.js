module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    'react-native/react-native': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['prettier', 'react', 'react-hooks', 'react-native'],
  extends: ['@react-native-community', 'eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'prettier/prettier': 'error',
    semi: 'error',
    radix: 'off',
    'no-var': 'error',
    'no-undef': 'error',
    'no-console': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'off',
    'newline-before-return': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/display-name': 'off',
    'react/prop-types': ['error', { ignore: ['route', 'navigation', 'children'] }],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-filename-extension': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 'warn',
    'react-native/no-inline-styles': 'error',
  },
};
