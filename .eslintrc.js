module.exports = {
  extends: [
    require.resolve('code-fabric/eslint-base'),
    require.resolve('code-fabric/eslint-typescript'),
    require.resolve('code-fabric/eslint-react'),
  ],
  rules: {
    'max-classes-per-file': 0,
    'no-void': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
  },
};
