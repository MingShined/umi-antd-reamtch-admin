export default interface MenuBean {
  store?: string;
  title: string;
  icon?: string;
  path?: string;
  key?: string;
  type?: MenuType;
  authority?: any;
  hideInMenu?: boolean;
  children?: MenuBean[];
}
export enum MenuType {
  SubMenu = 'SubMenu',
  ItemGroup = 'ItemGroup',
  Item = 'Item',
  Url = 'url',
  NoMenu = 'NoMenu'
}
