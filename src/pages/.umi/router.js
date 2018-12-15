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
        "path": "/index/",
        "exact": true,
        "component": require('../index/indexPage.tsx').default,
        "_title": "umi-ts-rematch",
        "_title_default": "umi-ts-rematch"
      },
      {
        "path": "/editor/",
        "exact": true,
        "component": require('../editor/indexPage.tsx').default,
        "_title": "umi-ts-rematch",
        "_title_default": "umi-ts-rematch"
      },
      {
        "path": "/add/",
        "exact": true,
        "component": require('../addPage/indexPage.tsx').default,
        "_title": "umi-ts-rematch",
        "_title_default": "umi-ts-rematch"
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../indexPage.tsx').default,
        "_title": "umi-ts-rematch",
        "_title_default": "umi-ts-rematch"
      },
      {
        "path": "/user/login",
        "exact": true,
        "component": require('../user/loginPage.tsx').default,
        "_title": "umi-ts-rematch",
        "_title_default": "umi-ts-rematch"
      }
    ],
    "_title": "umi-ts-rematch",
    "_title_default": "umi-ts-rematch"
  },
  {
    "component": () => React.createElement(require('/Users/mingshined/MyProject/umi-antd-dva-admin/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
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
