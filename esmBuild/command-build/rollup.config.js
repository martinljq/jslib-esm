import { commonConfig } from './common.config.js'

export const inputConfig = {
  input: 'src/index.js',
  ...commonConfig,
}

export const outputConfig = {
  file: 'dist/index.esm.js',
  format: 'cjs',
}
