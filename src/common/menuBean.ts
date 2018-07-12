export default interface MenuBean {
  name: string;
  icon?: string;
  path?: string;
  type?: MenuType;  
  key?: string;
  children?: MenuBean[];
}
export enum MenuType {
  SubMenu = 'SubMenu',
  ItemGroup = 'ItemGroup',
  Item = 'Item'
}
