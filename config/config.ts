/*
 * @Author: Chris
 * @Date: 2023-04-27 17:37:29
 * @LastEditors: Chris
 * @LastEditTime: 2023-04-28 10:18:02
 * @Descripttion: **
 */

import { defineConfig } from '@umijs/max';
import routes from './routes';
import proxy from './proxy';
console.log(process.env.UMI_ENV)
export default defineConfig({
  antd: {
  },
  access: {},
  model: {},
  initialState: {},
  request: {
    // dataField: 'data'
  },
  // layout: false, // 打开时，注释掉app.ts内的layout，使用自定义layout组件
  // 如果打开使用umi内置的antd-pro的layout，且layout配置会被app.ts内的layout覆盖
  layout: {
    title: '@umijs/max',
  },
// @ts-ignore
  proxy: proxy[process.env.SERVER_PORT],
  routes,
  npmClient: 'pnpm',
});