import React, { Component } from 'react';
import BasicLayout from 'src/layouts/BasicLayout';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import store from 'store';
import { Basic } from 'src/types';
import LoginPage from 'src/pages/user/loginPage';

interface Props extends Basic.BaseProps {}

class MainLayout extends Component<Props> {
  componentWillMount() {
    const pathname: string | any = this.props.location.pathname;
    store.dispatch.app.filterBreadCurmbs(pathname);
  }
  componentWillReceiveProps(nextProps) {
    store.dispatch.app.filterBreadCurmbs(nextProps.location.pathname);
  }
  render() {
    const { children, location } = this.props;
    let layout = null;
    if (location.pathname === '/login') {
      layout = <LoginPage />;
    } else {
      layout = <BasicLayout location={location} children={children} />;
    }
    return <LocaleProvider locale={zh_CN}>{layout}</LocaleProvider>;
  }
}

export default MainLayout;
