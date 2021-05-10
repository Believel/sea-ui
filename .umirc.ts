import { defineConfig } from 'dumi';
import lessHack from './src/theme/customization';

// 配置文件
export default defineConfig({
  // 配置文档的名称，导航栏或侧边栏上。
  title: 'seaui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // 配置文档的 logo
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // 指定输出路径
  outputPath: 'dist',
  // 如果使用 less-loader@5，请移除 lessOptions 这一级直接配置选项。
  lessLoader: {
    // lessOptions: {
    outputStyle: 'expanded',
    javascriptEnabled: true,
    // 自定义主体变量
    modifyVars: lessHack,
    // }
  },
  // 配置额外的 babel 插件
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
      },
    ],
  ],
  // more config: https://d.umijs.org/config
});
