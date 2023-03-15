import config from '../../jslib-esm.config.js'

export const inputConfig = {
  input: 'src/index.js',
}

export const outputConfig = {
  file: 'dist/index.esm.js',
  format: 'umd',
  name: config.globalName,
}
