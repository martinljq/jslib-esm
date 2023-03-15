import inquirer from 'inquirer'
import fs from 'fs'
import path from 'path'

import { done } from '../utils/logger.js'

const promptArr = []
promptArr.push(
  {
    // 提问的类型 input, confirm, list, rawlist, expand, checkbox, password, editor
    type: 'input',
    // 存储当前问题回答的变量
    name: 'umdName',
    // 问题的描述
    message: 'Enter the name for umd export (used as global varible name in browsers):',
    // 对用户回答的信息校验
    validate(name) {
      if (/^[a-zA-Z][\w\.]*$/.test(name)) {
        return true
      } else {
        return `Invalid varible name: ${name}!`
      }
    },
  },
  {
    // 提问的类型 input, confirm, list, rawlist, expand, checkbox, password, editor
    type: 'input',
    // 存储当前问题回答的变量
    name: 'libName',
    // 问题的描述
    message: 'Enter the name of your project (used as npm package name):',
    // 对用户回答的信息校验
    validate(name) {
      if (/^[a-zA-Z@][\w-]*\/?[\w-]*$/.test(name)) {
        return true
      } else {
        return `Invalid varible name: ${name}!`
      }
    },
  },
)
export default async function () {
  let files = ['jslib-esm.config.js']
  // 启动会话界面
  const { umdName } = await inquirer.prompt(promptArr)
  try {
    await Promise.all(
      // 读取文件 然后修改需要变更的参数
      files.map((file) => {
        return new Promise((resolve, reject) => {
          // 获取根目录
          const filePath = path.resolve(new URL(import.meta.url).pathname, '../../../', file)
          // 读取文件
          fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) {
              reject(err)
              return
            }
            let result = data
            // 匹配对应目录的文件内容，进行修改
            if (file.indexOf('jslib-esm.config.js') > -1) {
              result = result.replace('umdName', umdName)
            }

            // 将修改后的内容重新写回文件
            fs.writeFile(filePath, result, 'utf8', (writeErr) => {
              if (writeErr) {
                reject(writeErr)
                return
              }
              resolve()
            })
          })
        })
      }),
    )
    done('Initialized successfully, enjoy coding!')
  } catch (error) {
    throw new Error(error)
  }
  // console.log(umdName)
}
