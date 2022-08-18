module.exports = {
  extends: ['custom/next'],
  parserOptions: { project: require.resolve('./tsconfig.json') },
  root: true,
  settings: {
    'import/resolver': {
      typescript: { project: require.resolve('./tsconfig.json') },
    },
  },
};
