import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.tsx').default,
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": require('../404.tsx').default,
        "_title": "umi-ts-rematch",
        "_title_default": "umi-ts-rematch"
      },
      {
        "path": "/user/login",
        "exact": true,
        "component": require('../user/loginPage.tsx').default,
        "_title": "umi-ts-rematch",
        "_title_default": "umi-ts-rematch"
      },
      {
        "path": "/index/good/",
        "exact": true,
        "component": require('../index/good/indexPage.tsx').default,
        "_title": "umi-ts-rematch",
        "_title_default": "umi-ts-rematch"
      },
      {
        "path": "/index/good/addGood",
        "exact": true,
        "component": require('../index/good/addGoodPage.tsx').default,
        "_title": "umi-ts-rematch",
        "_title_default": "umi-ts-rematch"
      },
      {
        "path": "/index/customer/",
        "exact": true,
        "component": require('../index/customer/indexPage.tsx').default,
        "_title": "umi-ts-rematch",
        "_title_default": "umi-ts-rematch"
      }
    ],
    "_title": "umi-ts-rematch",
    "_title_default": "umi-ts-rematch"
  },
  {
    "component": () => React.createElement(require('/Users/mingshined/MyProject/umi-antd-rematch-admin/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
    "_title": "umi-ts-rematch",
    "_title_default": "umi-ts-rematch"
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
