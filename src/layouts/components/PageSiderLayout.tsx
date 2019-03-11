import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
import menu from 'src/common/menu';
import { Basic } from 'src/types';
import MenuBean, { MenuType } from 'src/common/menuBean';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
import store, { connect, Models } from 'store';
import { RematchRootState, RematchDispatch } from '@rematch/core';

const getIcon = icon => {
  if (typeof icon === 'string' && icon.indexOf('http') === 0) {
    return <img src={icon} alt="icon" />;
  }
  if (typeof icon === 'string') {
    return <Icon type={icon} />;
  }
  return icon;
};

const mapState = ({ ['app']: state }: RematchRootState<Models>) => ({
  ...state
});
const mapDispatch = ({  }: RematchDispatch<Models>) => ({});
interface PageSiderLayoutProps
  extends Partial<ReturnType<typeof mapState>>,
    Partial<ReturnType<typeof mapDispatch>>,
    Basic.BaseProps {}

@connect(
  mapState,
  mapDispatch
)
export default class PageSiderLayout extends Component<PageSiderLayoutProps> {
  public renderMenuItem = (menusData: MenuBean[]) => {
    if (!menusData) {
      return [];
    }
    function renderTitle(item: MenuBean) {
      return item.icon ? (
        <span>
          {getIcon(item.icon)}
          <span>{item.title}</span>
        </span>
      ) : (
        item.title
      );
    }
    return menusData.map(item => {
      let view = null;
      switch (item.type) {
        case MenuType.SubMenu:
          view = (
            <SubMenu title={renderTitle(item)} key={item.path}>
              {this.renderMenuItem(item.children)}
            </SubMenu>
          );
          break;
        case MenuType.ItemGroup:
          view = (
            <Menu.ItemGroup title={renderTitle(item)} key={item.path}>
              {this.renderMenuItem(item.children)}
            </Menu.ItemGroup>
          );
          break;
        case MenuType.Item:
          view = (
            <Menu.Item key={item.path}>
              <Link to={item.path}>{renderTitle(item)}</Link>
            </Menu.Item>
          );
          break;
        case MenuType.Url:
          view = (
            <Menu.Item key={item.path}>
              <a href={item.path} target="_blank">
                {renderTitle(item)}
              </a>
            </Menu.Item>
          );
          break;
        default:
          view = (
            <Menu.Item key={item.path}>
              <Link to={item.path}>{renderTitle(item)}</Link>
            </Menu.Item>
          );
          break;
      }
      return view;
    });
  };
  render() {
    const { collapsed, breadCrumbs } = this.props;
    const keys = breadCrumbs.map(item => item.path);
    // tslint:disable-next-line:no-console
    console.log(keys);
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={256}
        style={{ boxShadow: '2px 0 6px rgba(0, 21, 41, 0.35)' }}
      >
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={keys}
          defaultOpenKeys={keys}
        >
          {this.renderMenuItem(menu)}
        </Menu>
      </Sider>
    );
  }
}
