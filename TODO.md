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
