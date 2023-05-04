import { useState } from "react";
import { request, useRequest, createBrowserHistory, createSearchParams, useSearchParams, useLocation, useAppData, useParams, useRouteData } from '@umijs/max';

/*
 * @Author: Chris
 * @Date: 2023-04-27 16:25:36
 * @LastEditors: Chris
 * @LastEditTime: 2023-04-28 17:00:27
 * @Descripttion: **
 */
// import { createBrowserHistory, createSearchParams, useSearchParams, useLocation } from 'umi';

const Index: React.FC = () => {
// const { search } = useLocation()
// console.log(createSearchParams(search).get('foo'));
const [searchParams, setSearchParams] = useSearchParams()
console.log(searchParams.get('foo'));
console.log(useAppData())
console.log(useParams())
console.log(useRouteData())
  request('/api/admin/stat_behavior', {
    // params: { name : 1 },
    timeout: 2000,
    // other axios options
    skipErrorHandler: true,
    getResponse: false,
    requestInterceptors: [],
    responseInterceptors: [],
  }
  ).then((res) => {
    console.log(res);
  });
  const [value, setValue] = useState(0);

  return (
    <div>ddddd</div>
  )
}
export default Index;