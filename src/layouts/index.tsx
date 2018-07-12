import React, { Component } from 'react';
import BasicLayout from './BasicLayout';
import BaseProps from '../declare/baseProps';
import { withRouter } from 'dva/router';
import LoginLayout from './LoginLayout';
import EmptyLayout from './EmptyLayout';
import router from 'umi/router';

class MainLayout extends Component<BaseProps, any> {
  // componentWillUpdate() {
  //   const idToken = localStorage.getItem('idToken');
  //   if (!idToken) {
  //     router.push('/user/login');
  //   }
  // }
  render() {
    const props = this.props;
    let layout = null;
    if (props.location.pathname === '/user/login') {
      layout = <LoginLayout />;
    } else if (props.location.pathname === '/addPage') {
      layout = <EmptyLayout />;
    } else {
      layout = <BasicLayout children={props.children} />;
    }
    return layout;
  }
}

export default withRouter(MainLayout);
