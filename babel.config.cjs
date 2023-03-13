module.exports = {
  // overrides: [
  //   {
  //     presets: ['@babel/preset-typescript'],
  //     test: /\.tsx?$/,
  //   },
  // ],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
      },
    ],
  ],
  exclude: 'node_modules/**',
}
