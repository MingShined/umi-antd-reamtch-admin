import BaseModel from 'src/declare/baseModel';
import _ from 'lodash';
import { AppModelState } from 'src/declare/global';
import menuData from 'src/common/menuData';

const filterMenuOpenKeys = (data, pathname) => {
  const result = data.find(item => {
    if (item.path === pathname) {
      return true;
    }
    if (item.children) {
      return filterMenuOpenKeys(item.children, pathname);
    }
  });
  return result;
};

/**
 *  全局应用状态
 */

const initMenuStatus = {
  collapsed: false,
  openKeys: [''],
  selectedKeys: ['']
};

const initState = {
  menuStatus: { ...initMenuStatus }
};

const getInitState = data => {
  return _.cloneDeep(data);
};

export default {
  namespace: 'app',
  state: getInitState(initState),
  reducers: {
    updateSiderMenuStatus(state, { payload }) {
      return { ...state, menuStatus: { ...state.menuStatus, ...payload } };
    }
  },
  subscriptions: {
    handleListMenuStatus({ dispatch, history }) {
      history.listen(({ pathname, query }) => {
        const menuItem = filterMenuOpenKeys(menuData, pathname);
        const openKeys = menuItem.type === 'SubMenu' ? [menuItem.path] : [''];
        dispatch({
          type: 'app/updateSiderMenuStatus',
          payload: {
            openKeys,
            selectedKeys: [pathname],
          }
        });
      });
    }
  }
} as BaseModel<AppModelState>;
