import React, { Component } from 'react';
import { Layout, Icon, Avatar, Button, Popover } from 'antd';
import { Basic } from 'src/types';
import Link from 'umi/link';
const { Header } = Layout;

interface PageHeaderLayoutProps extends Basic.BaseProps {
  collapsed?: boolean;
}

export default class PageHeaderLayout extends Component<PageHeaderLayoutProps> {
  render() {
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
      <Header style={{ background: '#001529', padding: 0 }}>
        <Popover
          content={content}
          placement="topLeft"
          title="管理员权限"
          trigger="click"
          arrowPointAtCenter
        >
          <span
            style={{ cursor: 'pointer', float: 'right', marginRight: '20px' }}
          >
            <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
            管理员
          </span>
        </Popover>
      </Header>
    );
  }
}
