import chalk from 'chalk'

export const done = function (msg) {
  const chalkMsg = chalk.bgGreen.black(msg)
  console.log(chalkMsg)
}
