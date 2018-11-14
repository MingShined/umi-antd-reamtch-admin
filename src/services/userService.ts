import request, { errorProcess } from 'src/utils/request';

const UserService = {
  async login() {
    return request({
      method: 'get',
      url: '/api/getToken'
    }).then(errorProcess);
  },
  async test(data) {
    return request({
      data,
      method: 'post',
      url: '/api/save'
    });
  },
  async list() {
    return request({
      method: 'get',
      url: '/api/list'
    });
  }
};
export default UserService;
