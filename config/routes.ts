import proxy from "./proxy";

/*
 * @Author: Chris
 * @Date: 2023-04-27 17:45:56
 * @LastEditors: Chris
 * @LastEditTime: 2023-04-27 17:58:29
 * @Descripttion: **
 */
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    // layout: false, //如果使用antd-pro插件布局的话，隐藏layout布局（菜单和页头）
    component: './Home',
  },
  {
    name: '二级菜单',
    path: '/access',
    routes: [
      {
        path: '/access/',
        redirect: '/access/table',
      },
      {
        name: ' CRUD 示例',
        path: '/access/table',
        component: './Table',
      },
      {
        name: '权限演示',
        path: '/access/access',
        component: './Access',
      },
    ]
    // layout: false,
  },
  {
    layout: false,
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
  {
    name: ' Test 示例',
    path: '/test',
    component: './Test',
  },
  proxy
]

export default routes;