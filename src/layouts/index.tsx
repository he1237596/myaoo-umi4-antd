/*
 * @Author: Chris
 * @Date: 2023-04-27 13:57:51
 * @LastEditors: Chris
 * @LastEditTime: 2023-04-27 14:01:14
 * @Descripttion: **
 */
// import React from 'react';
import { Outlet } from "@umijs/max"
const Index = () =>{
  return (
    <div>
      <div>这是layout布局层</div>
      <Outlet/>
    </div>
  )
}
export default Index;