import React, { Component } from 'react';
import { Layout, Icon, Avatar, Button, Popover } from 'antd';
import { Basic } from 'src/types';
import Link from 'umi/link';
import { RematchRootState, Models, RematchDispatch } from '@rematch/core';
import { connect } from 'src/store';
const { Header } = Layout;

interface PageHeaderLayoutProps extends Basic.BaseProps {
  collapsed?: boolean;
}

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
export default class PageHeaderLayout extends Component<PageHeaderLayoutProps> {
  render() {
    const { collapsed } = this.props;
    const content = (
      <div>
        <Button disabled style={{ border: 'none', display: 'block' }}>
          <Icon type="user" />
          个人中心
        </Button>
        <Button style={{ border: 'none', display: 'block' }}>
          <Link to="/login">
            <Icon type="logout" />
            登出
          </Link>
        </Button>
      </div>
    );
    return (
      <Header
        style={{
          background: '#001529',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          color: '#fff'
        }}
      >
        <div className="logo">{collapsed ? '^_^' : 'Umi-Antd-Rematch'}</div>
        <Popover
          content={content}
          placement="topLeft"
          title="管理员权限"
          trigger="click"
          arrowPointAtCenter
        >
          <span style={{ cursor: 'pointer' }}>
            <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
            管理员
          </span>
        </Popover>
      </Header>
    );
  }
}
