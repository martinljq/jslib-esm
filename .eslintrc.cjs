module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // parser: '@babel/eslint-parser',
  plugins: ['prettier'],
  extends: ['prettier', 'plugin:prettier/recommended'],
  rules: {
    // 生产环境不允许console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 生产环境不允许debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止在语句末尾使用分号 (除了消除以 [、(、/、+ 或 - 开始的语句的歧义)
    semi: ['error', 'never'],
    // 禁止函数圆括号之前有一个空格
    'space-before-function-paren': 0,
    // 操作符后面可以换行，问号及冒号
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'no-shadow': 'off',
    'prettier/prettier': 'error',
    'no-async-promise-executor': 'off',
    'import/no-dynamic-require': 'off',
    'no-unused-vars': 'error',
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // rules: {
  //   semi: 'error',
  //   'no-console': 'error',
  //   'prettier/prettier': 'error',
  // },
}
