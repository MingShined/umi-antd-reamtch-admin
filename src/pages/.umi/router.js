import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

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
        "path": "/index/",
        "exact": true,
        "component": require('../index/indexPage.tsx').default
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
      }
    ]
  },
  {
    "component": () => React.createElement(require('E:/GitHub仓库/umi-antd-dva-admin/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
  }
];

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
