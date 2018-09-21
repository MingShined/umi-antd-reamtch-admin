import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'dva';
import { spawn } from 'child_process';
import Link from 'umi/link';
import BaseProps from 'src/declare/baseProps';
import menuData from 'src/common/menuData';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

interface Props extends BaseProps {
  collapsed: boolean;
}

@connect(({ app }) => ({
  collapsed: app.collapsed
}))
export default class PageSiderLayout extends Component<BaseProps, Props> {
  render() {
    const { collapsed } = this.props;
    return (
      <Sider trigger={null} collapsible collapsed={collapsed} width={256}>
        <div className="logo">{collapsed ? '^_^' : 'UMI-ANTD-DVA'}</div>
        <Menu theme="dark" mode="inline" inlineCollapsed={collapsed} defaultSelectedKeys={['主页']}>
          {menuData.map(
            item =>
              item.type === 'SubMenu' ? (
                <SubMenu
                  key={item.name}
                  title={
                    <span>
                      <Icon type={item.icon ? item.icon : ''} />
                      <span>{item.name}</span>
                    </span>
                  }
                >
                  {item.children
                    ? item.children.map(children => (
                        <MenuItem key={children.name}>
                          <Link to={children.path}>{children.name}</Link>
                        </MenuItem>
                      ))
                    : null}
                </SubMenu>
              ) : (
                <MenuItem key={item.name}>
                  <Link to={item.path}>
                    <Icon type={item.icon} />
                    <span>{item.name}</span>
                  </Link>
                </MenuItem>
              )
          )}
        </Menu>
      </Sider>
    );
  }
}
