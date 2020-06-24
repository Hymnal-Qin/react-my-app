import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';

import Layout from './layout/Layout';
import RoutePrivate from './modules/auth/RoutePrivate';
import NotFound from './layout/NotFound';

const App = () => (
  <Layout>
    {/* route 路由注册 */}
    <Switch>
      {/* 将路由表转换为路由组件表 */}
      {Object.values(routes).map((route, index) =>
          // 遍历注册路由
          route.auth
            ? <RoutePrivate {...route} key={route.path} index={index}
                            path={typeof route.path === 'function' ? route.path() : route.path}/>
            : <Route {...route} key={route.path} index={index}
                     path={typeof route.path === 'function' ? route.path() : route.path}/>
        ,
      )}
      <Route component={NotFound}/>
    </Switch>
  </Layout>
);
export default App;
