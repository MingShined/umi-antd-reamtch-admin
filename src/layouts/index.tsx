import React, { Component } from 'react';
import { withRouter } from 'dva/router';
import router from 'umi/router';
import BaseProps from 'src/declare/baseProps';
import LoginLayout from 'src/layouts/LoginLayout';
import EmptyLayout from 'src/layouts/EmptyLayout';
import BasicLayout from 'src/layouts/BasicLayout';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

class MainLayout extends Component<any> {
  render() {
    const props = this.props;
    let layout = null;
    if (props.location.pathname === '/login') {
      layout = <LoginLayout />;
    } else if (props.location.pathname === '/addPage') {
      layout = <EmptyLayout />;
    } else {
      layout = <BasicLayout children={props.children} />;
    }
    return <LocaleProvider locale={zh_CN}>{layout}</LocaleProvider>;
  }
}

export default withRouter(MainLayout);
