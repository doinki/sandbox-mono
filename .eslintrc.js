module.exports = {
  extends: ['sandbox', 'sandbox/next', 'sandbox/prettier'],
  ignorePatterns: ['**/public'],
  overrides: [],
  parserOptions: {
    project: ['tsconfig.json', 'packages/*/tsconfig.json'],
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/next.config.js'] },
    ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-shadow': 'off',
  },
};
