import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';
declare var window: any;

// import store from '../index.js';

export interface BaseResponse extends AxiosResponse {
  total?: number;
  headers: {
    'X-Total-Count'?: number;
    'x-total-count'?: number;
    totalCount?: number;
    [propName: string]: any;
  };
}

axios.interceptors.request.use(
  // tslint:disable-next-line:no-shadowed-variable
  (request) => {
    if (!request.headers) {
      request.headers = { Authorization: getAuthorization() };
    } else {
      request.headers.Authorization = getAuthorization();
    }
    return request;
  },
  (error) => {
    return Promise.resolve(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isCancel(error)) {
      const response = {
        config: {},
        headers: {},
        status: -999,
        statusText: '中断请求',
        data: undefined
      };
      return Promise.resolve(response);
    }
    return Promise.resolve(error.response);
  }
);
function parseJSON(response: BaseResponse) {

  // console.log(response)
  if (response.headers['x-total-count']) {
    response.headers.totalCount = response.headers['x-total-count'];
    response.total = response.headers['x-total-count'];
  }
  // tslint:disable-next-line:no-console
  // console.log(response);
  return response;
}
function checkStatus(response: BaseResponse) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const store = window.g_app._store;
  if (response.status === 401) {
    // message.error(`错误代码：${status} ，Unauthorized/未授权!`);
    window.localStorage.setItem('id_token', '');
    window.localStorage.setItem('active', '');
    window.localStorage.setItem('admin', '');
    location.replace('#/user/login');
  }
  // tslint:disable-next-line:no-console
  // console.log(response);
  return {
    config: response.config,
    headers: response.headers,
    status: response.status,
    statusText: response.statusText,
    data: response.data
  };
}
function getAuthorization() {
  const store = window.g_app._store;
  // console.log(store.getState())
  // tslint:disable-next-line:no-console
  // tslint:disable-next-line:variable-name
  const  id_token  = localStorage.getItem('id_token'); // eslint-disable-line
  if (id_token !== undefined && id_token !== 'undefined') {
    return `${id_token}`;
  }
  // tslint:disable-next-line:no-debugger
  // debugger;
  return undefined;

}

export default function request(options: AxiosRequestConfig) {
  return axios(options)
    .then(checkStatus)
    .then(parseJSON);
}
export function errorProcess(response: BaseResponse) {
  const { status , data } = response;
  if (data && data.message) {
    message.error(data.message);
    return response;
  }
  if (status === 500) {
    message.error(`错误代码：${status} ，Internal Server Error/内部服务器错误!`);
  }
  if (status === 501) {
    message.error(`错误代码：${status} ，Not Implemented/未实现!`);
  }
  if (status === 502) {
    message.error(`错误代码：${status} ，Bad Gateway/错误的网关!`);
  }
  if (status === 503) {
    message.error(`错误代码：${status} ，Service Unavailable/服务无法获得!`);
  }
  if (status === 504) {
    message.error(`错误代码：${status} ，Gateway Timeout/网关超时!`);
  }
  if (status === 505) {
    message.error(`错误代码：${status} ，HTTP Version Not Supported/不支持的 HTTP 版本!`);
  }
  if (status === 400) {
    message.error(`错误代码：${status} ，Bad Request/错误请求!`);
  }
  if (status === 401) {
    message.error(`错误代码：${status} ，Unauthorized/未授权!`);
    // window.localStorage.setItem('id_token', '');
    // window.localStorage.setItem('active', '');
    // window.localStorage.setItem('admin', '');
    // location.replace('#/login');
  }
  if (status === 403) {
    message.error(`错误代码：${status} ，Forbidden/禁止!`);
  }
  if (status === 404) {
    message.error(`错误代码：${status} ，Not Found/未找到资源!`);
  }
  if (status === 405) {
    message.error(`错误代码：${status} ，Method Not Allowed/方法未允许!`);
  }
  if (status ===  406) {
    message.error(`错误代码：${status} ，Not Acceptable/无法访问!`);
  }
  if (status === 407) {
    message.error(`错误代码：${status} ，Proxy Authentication Required/代理服务器认证要求!`);
  }
  if (status === 408) {
    message.error(`错误代码：${status} ，Request Timeout/请求超时!`);
  }
  if (status === 409) {
    message.error(`错误代码：${status} ，Conflict/冲突!`);
  }
  if (status  === 410) {
    message.error(`错误代码：${status} ，Gone/已经不存在!`);
  }
  if (status  === 417) {
    message.error(`错误代码：${status} ，Expectation Failed/请求头信息期望失败!`);
  }
  return response;
}
