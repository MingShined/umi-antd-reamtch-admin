/**
 * @name 基础布局Layout
 * @author MingShined
 */
import React, { Component } from 'react';
import { Basic } from 'src/types';
import PageSiderLayout from './components/PageSiderLayout';
import { Layout } from 'antd';
import PageHeaderLayout from './components/PageHeaderLayout';
import PageContentLayout from './components/PageContentLayout';

interface Props extends Basic.BaseProps {}

export default class BasicLayout extends Component<Props> {
  render() {
    const { children } = this.props;
    // const {} = this.state;
    return (
      <Layout style={{ display: 'flex', flex: 1, height: '100%' }}>
        <PageHeaderLayout />
        <Layout style={{ display: 'flex' }}>
          <PageSiderLayout />
          <PageContentLayout children={children} />
        </Layout>
      </Layout>
    );
  }
}
