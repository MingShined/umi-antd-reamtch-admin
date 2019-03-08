import MenuBean, { MenuType } from 'src/common/menuBean';

const menu: MenuBean[] = [
  {
    title: '主页',
    path: '/index',
    type: MenuType.SubMenu,
    children: [
      {
        title: '商品管理',
        path: '/index/good',
        type: MenuType.Item,
        children: [
          {
            title: '新增商品',
            path: '/index/good/addGood',
            type: MenuType.NoMenu
          }
        ]
      },
      {
        title: '客户管理',
        path: '/index/customer',
        type: MenuType.Item
      }
    ]
  }
];

export default menu;
