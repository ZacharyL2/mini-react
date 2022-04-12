module.exports = {
  extends: [
    require.resolve('code-fabric/eslint-base'),
    require.resolve('code-fabric/eslint-react'),
  ],
  rules: {
    'max-classes-per-file': 0,
    'no-void': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [require.resolve('code-fabric/eslint-typescript')],
    },
  ],
  settings: {
    react: {
      version: '18.x',
    },
  },
};
