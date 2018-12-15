import { resolve } from 'path';
import proxy from './proxyConfig.js';
function getRouter(router) {
  if (router.routes) {
    router.routes = router.routes
      .filter(({ component }) => {
        if (component.indexOf('page.tsx') >= 0) {
          return true;
        }
        if (
          component.indexOf('Page.tsx') >= 0 ||
          component.indexOf('404.tsx') >= 0
        ) {
          return true;
        }
        //  if(component.sp)
        return false;
      })
      .map(item => {
        if (!item.path) {
          return item;
        }
        return {
          ...item,
          path: item.path
            .replace('index/page', '')
            .replace('indexPage', '')
            .replace('Page', '')
            .replace('page', '')
        };
      });
  }
  return router;
}
export default {
  proxy,
  history: 'hash',
  hash: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: 'umi-ts-rematch',
        dll: false,
        routes: {
          update(routes) {
            return routes.map(item => {
              return getRouter(item);
            });
          }
        },
        hardSource: false
      }
    ],
    ['./src/plugins/rematchPlugin/index.js', {}]
  ],
  alias: {
    src: resolve(__dirname, '../src'),
    store: resolve(__dirname, '../src/store')
  }
};
