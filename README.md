# seaui

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
