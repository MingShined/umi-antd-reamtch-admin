/**
 * @name 全局应用store
 */
import _ from 'lodash';
import { filterBreadCrumbs } from 'src/components/page-layout/utils';
import menu from 'src/common/menu';

const initState = {
  /**
   * @name 菜单收缩
   */
  collapsed: false,
  /**
   * @name 面包屑
   */
  breadCrumbs: []
};
type State = Partial<typeof initState>;

const getInitState = (): State => {
  return _.cloneDeep(initState);
};

const app = {
  state: getInitState(),
  reducers: {
    /**
     * @name 初始化
     */
    resetState() {
      return getInitState();
    },
    /**
     * @name 更新state
     */
    updateState(state: State, payload: State) {
      return { ...state, ...payload };
    }
  },
  effects: dispatch => ({
    /**
     * @name 获取当前面包屑
     */
    filterBreadCurmbs(payload: string | any, rootState?) {
      const breadCrumbs = [];
      filterBreadCrumbs(menu, payload, breadCrumbs);
      dispatch.app.updateState({ breadCrumbs });
    }
  })
};
export default app;
