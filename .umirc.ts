import { defineConfig } from 'umi';
import pageRoutes from './router.config.js';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: pageRoutes,
  devServer: {
    // 本地启动（内存启动不打包） 相关依赖webpack-dev-server
    port: 3000, // 端口
    progress: true, // 进度条
    contentBase: './build', // 打开的目录
    open: true, // 自动开启
    // compress:true                                  //压缩
  },
});
