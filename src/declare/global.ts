/**
 * @name 全局应用modelState
 */
export interface AppModelState {
  menuStatus?: MenuStatusProps;
}

export interface MenuStatusProps {
  collapsed?: boolean;
  openKeys?: string[];
  selectedKeys?: string[];
}
