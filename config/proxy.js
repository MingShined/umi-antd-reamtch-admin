const devPath = 'http://dev.mall.taoqicar.com:8086/';
export default {
  '/api': {
    target: devPath,
    changeOrigin: false
  },
  '/mall/api/': {
    target: devPath,
    changeOrigin: false
  },
  '/miniseller': {
    target: devPath,
    changeOrigin: false
  },
  '/mallcms': {
    target: devPath,
    changeOrigin: false
  },
  '/usercenter': {
    target: devPath,
    changeOrigin: false
  },
  '/message/api': {
    target: devPath,
    changeOrigin: false
  },
  '/contract': {
    target: devPath,
    changeOrigin: false
  },
  '/m-site': {
    target: devPath,
    changeOrigin: false
  },
  '/datashadow': {
    target: devPath,
    changeOrigin: false
  }
};
