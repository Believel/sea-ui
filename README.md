---
name: seaui
route: /
edit: false
sidebar: true
---

## 官网

https://d.umijs.org/zh-CN

## Getting Started

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Build library via `father-build`,

```bash
$ npm run build
```

```js
"docs:deploy": "gh-pages -d dist", // dist 是打包生成的目录
```

# 控制路由生成

# 目录结构

```js
src # 组件库源码目录
  Button # 单个组件
    index.tsx  # 组件源码
    index.less # 组件样式
    index.md   # 组件文档
  index.ts  # 组件库入口文件
.umirc.ts  # dumi 配置文件（也可以是 config/config.ts）
.fatherrc.ts # father-build 的配置文件，用于组件打包
```

# 安装其他第三方包

- `antd` 在 antd UI 库的基础上开发属于自己的组件库
  - `antd`自己的`css` 文件在使用的时候自己需要全局引入
  - 自己组件库的 css 文件也需要在项目中全局引入使用时才能生效

# webpack 配置

````js
### webpack 配置

```js
{
  loader: "less-loader",
  options: {
    outputStyle: "expanded",
    javascriptEnabled: true,
    modifyVars: require("包名/es/theme/customization")
  }
}
````
