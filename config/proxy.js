const devPath = 'http://10.0.31.68:65137/';
export default {
  '/api/': {
    target: devPath,
    changeOrigin: false
  },
};
