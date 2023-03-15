# 选择打包工具

# 1、明确我们要开发的是一款基于 esm 的，js 库的一个模板

# 2、选择何种打包工具，适合 js 库开发

2.1 暂定 rollup
2.2 rollup 和 webpack 之间在什么情况下选择什么打包工具

# 3、打包配置

# 4、确定文件目录结构

4.1 js 库的内容在 src 下开发
4.2 esmBuild 目录主要用于存放，打包时需要用到的一些配置
4.3 rollup 打包配置文件，按照不同打包方式分文件存储，通过 rollup.rollup()读取 inputOptions，通过 generate 读取 outputOptions
4.3.1 怎么读取对应的打包配置文件？

# 5、配置 eslint 和 prettier

5.1 添加 eslint 和 eslint 配置，以及哪些文件应该被 eslint 忽略
5.2 由于启用了 type: module 默认开启 esm，但是默认 js 会识别为 cjs，所以需要修改后缀

# 6、husky + commitlint + lint-staged

6.1 commitlint 实现对 commit 信息的校验，通过配置 commitlint.config.js
6.2 husky 生成 .husky 文件用于存储 git hooks 执行前执行的自定义脚本
6.3 在.husky 文件定义两个 hooks 的执行脚本 commit-msg 和 pre-commit，这两个分别对应 commit 信息校验，和 commit hooks 执行时
执行脚本 npx lint-staged ，校验代码的规范，进行修复。

# 7、通过脚本修改一些 author/github 地址/库 name 信息

7.1 通过 inquirer.js 实现用户与命令行交互式选择，修改 author/github 地址/库 name 的信息

# 8、搭建一个脚手架工具实现远程拉模板，输入命令，替换一些信息
