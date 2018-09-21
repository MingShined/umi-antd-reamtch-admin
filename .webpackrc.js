import { resolve } from 'path';
// const devPath = 'http://m.kugou.com'
export default {
  alias: {
    components: resolve(__dirname, './src/components')
  },
  publicPath: '/static/',
  // "copy": [
  //   {
  //     "from": "public",
  //     "to": "../"
  //   }
  // ],
  ignoreMomentLocale: true,
  proxy: {
    '/proxy': {
      target: 'http://m.kugou.com',
      changeOrigin: true,
      pathRewrite: {
        '^/proxy': ''
      }
    },
    '/aproxy': {
      target: 'http://mobilecdn.kugou.com',
      changeOrigin: true,
      pathRewrite: {
        '^/aproxy': ''
      }
    },
    '/bproxy': {
      target: 'http://www.kugou.com',
      changeOrigin: true,
      pathRewrite: {
        '^/bproxy': ''
      }
    }
  }
};
