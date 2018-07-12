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
  // console.log(router)s
  return router;
}

export default {
  plugins: [
    'umi-plugin-dva',
    [
      'umi-plugin-routes',
      {
        update(routes) {
          // console.log(JSON.stringify(routes));
          return routes.map(item => {
            return getRouter(item);
          });
        }
      }
    ]
  ],
  hashHistory: true,
};
