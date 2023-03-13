// import path from 'path'
import { rollup } from 'rollup'

// const __dirname = path.dirname(new URL(import.meta.url).pathname)

export default async function (args) {
  /**
   * 动态获取打包的配置文件 args[0] umd | esm | cjs
   */
  const { inputConfig, outputConfig } = await import(`./rollup.config${args.length > 1 ? '.' + args[1] : ''}.js`)
  // console.log(inputConfig, outputConfig)
  const bundle = await rollup(inputConfig)
  // await bundle.generate(outputConfig)
  try {
    await bundle.write(outputConfig)
  } catch (error) {
    console.log(error)
  }
}
// buildFunc()
// console.log(__dirname)
