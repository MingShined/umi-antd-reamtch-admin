import BaseModel from 'src/declare/baseModel';
import UserService from '../services/userService';
import router from 'umi/router';

/**
 * 用户管理模块
 */
const initState = {
  loginStatus: 200,
  idToken: localStorage.getItem('idToken') || undefined
};

export default {
  namespace: 'user',
  state: { ...initState },
  reducers: {
    setToken(state, { payload }) {
      localStorage.setItem('idToken', payload);
      return { ...state, idToken: payload };
    },
    changeLoginStatus(state, { payload }) {
      return { ...state, loginStatus: payload };
    }
  },
  effects: {
    *login({ payload }, { call, put }) {
      // yield put({
      //   type: 'changeLoginStatus',
      //   payload: 200
      // });
      // const { data, status } = yield call(UserService.login, payload);
      // yield put({
      //   type: 'changeLoginStatus',
      //   payload: status
      // });
      // if (status === 200) {
      yield put({
        type: 'setToken',
        payload: 'idToken'
      });
      router.push('/');
      // }
    },
    *logout(_, { put }) {
      yield put({
        type: 'setToken',
        payload: undefined
      });
      router.push('/user/login');
    }
  }
} as BaseModel<any>;
