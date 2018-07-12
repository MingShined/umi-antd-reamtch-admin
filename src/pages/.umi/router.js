import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.tsx').default,
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": require('../404.tsx').default
      },
      {
        "path": "/add/",
        "exact": true,
        "component": require('../addPage/indexPage.tsx').default
      },
      {
        "path": "/chart/",
        "exact": true,
        "component": require('../chart/indexPage.tsx').default
      },
      {
        "path": "/editor/",
        "exact": true,
        "component": require('../editor/indexPage.tsx').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../indexPage.tsx').default
      },
      {
        "path": "/user/login",
        "exact": true,
        "component": require('../user/loginPage.tsx').default
      },
      {
        "component": () => React.createElement(require('C:/Users/Administrator/Desktop/antd-umi-dva-admin/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src\\\\layouts\\\\index.tsx","routes":[{"path":"/404","exact":true,"component":"./src/pages/404.tsx"},{"path":"/addPage/indexPage","exact":true,"component":"./src/pages/addPage/indexPage.tsx"},{"path":"/chart/indexPage","exact":true,"component":"./src/pages/chart/indexPage.tsx"},{"path":"/editor/indexPage","exact":true,"component":"./src/pages/editor/indexPage.tsx"},{"path":"/indexPage","exact":true,"component":"./src/pages/indexPage.tsx"},{"path":"/user/loginPage","exact":true,"component":"./src/pages/user/loginPage.tsx"}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
