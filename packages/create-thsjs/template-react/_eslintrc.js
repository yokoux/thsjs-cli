module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    browser: true,
    commonjs: true,
    amd: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended',  'prettier'],
  parser: 'eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
  }
}
