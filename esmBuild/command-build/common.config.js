import { nodeResolve } from '@rollup/plugin-node-resolve'
import externals from 'rollup-plugin-node-externals'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'

export const commonConfig = {
  plugins: [
    // 识别第三方插件，处理第三方依赖，比如引用loadsh，这种外部引用的依赖
    nodeResolve(),

    // devDependencies 类型的依赖就不用加到 externals 了。externals插件可以指定插件保持外部引用
    externals({
      devDeps: false,
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
    }),
  ],
}
