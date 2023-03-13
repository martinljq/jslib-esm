import path from 'path'
// const path = require(path)
// const {satisfies} = require(semver)
import { satisfies } from 'semver'

// 判断当前系统的node不满足 对应的jalibNodeVersion 版本后，退出进程
const jalibNodeVersion = '>=14.18.3'
if (!satisfies(process.version, jalibNodeVersion)) {
  console.error(
    `Can it work Xigou, your node version is currently: ${process.version}, current js require: ${jalibNodeVersion}`,
  )
  process.exit(1)
}

/**
 * 读取 命令行 node ./xxxx/xxx.js build esm 的参数
 */
const argvs = process.argv.slice(2)

/**
 * __dirname在es6的模式下，不能动态读取node的全局变量__dirname,可以通过import.meta.url读取当前文件的绝对路径
 */
const __dirname = path.dirname(new URL(import.meta.url).pathname)

/**
 * 用于初始化，读取命令行参数，决定当前要找到哪个目录的index.js
 * @param {Array} args
 */
async function runEsmInit(args) {
  const runBuild = await import(`${__dirname}/command-${args[0]}/index.js`)
  console.log(runBuild.default)
  runBuild.default(args)
}

runEsmInit(argvs)
