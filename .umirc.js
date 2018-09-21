import { resolve } from 'path';
import proxy from './config/proxy';

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
          path: item.path.replace('indexPage', '').replace('Page', '')
        };
      });
  }
  // console.log(router)
  return router;
}

export default {
  proxy,
  alias: {
    components: resolve(__dirname, './src/components'),
    src: resolve(__dirname, './src')
  },
  publicPath: '/cms/static/',
  ignoreMomentLocale: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        routes: {
          update(routes) {
            return routes.map(item => {
              return getRouter(item);
            });
          }
        }
        // dll: true,
        // hardSource: true,
        // dynamicImport: {
        //   webpackChunkName: true,
        // },
        // title: '默认标题',
      }
    ]
  ]
  // exportStatic: true,
};
