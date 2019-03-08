import { httpGet } from 'src/utils/request';

/**
 * @name 全局service
 */
const GlobalService = {
  async demo(params) {
    const url = '';
    return httpGet(url, params);
  }
};
