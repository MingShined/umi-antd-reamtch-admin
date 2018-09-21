import React, { Component } from 'react';
import { withRouter } from 'dva/router';
import router from 'umi/router';
import BaseProps from 'src/declare/baseProps';
import LoginLayout from 'src/layouts/LoginLayout';
import EmptyLayout from 'src/layouts/EmptyLayout';
import BasicLayout from 'src/layouts/BasicLayout';

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
    return layout;
  }
}

export default withRouter(MainLayout);
