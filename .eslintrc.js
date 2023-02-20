module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  plugins: ['react'],
  globals: {
    graphql: false,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    ecmaVersion: 12,
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
};
