import request, { errorProcess } from 'src/utils/request';

export default {
  async login() {
    return request({
      method: 'get',
      url: '/api/getToken'
    }).then(errorProcess);
  },
  async getTestData() {
    return request({
      method: 'GET',
      url: '/proxy/rank/list&json=true'
    });
  }
};
