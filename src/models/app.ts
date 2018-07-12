import BaseModel from 'src/declare/baseModel';

/**
 *  全局应用状态
 */
export interface AppModelState {
  collapsed: boolean;
}
const initState = {
  collapsed: false
};

export default {
  namespace: 'app',
  state: { ...initState },
  reducers: {
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
} as BaseModel<AppModelState>;
