import React, { Component } from 'react';
import { Layout } from 'antd';
import PageFooterLayout from './PageFooterLayout';
const { Content } = Layout;

export default class PageContentLayout extends Component {
  render() {
    return (
      <div
        style={{
          overflowY: 'auto',
          overflowX: 'hidden',
          display: 'flex',
          flex: 1,
          flexDirection: 'column'
        }}
      >
        <Content style={{ display: 'flex', flexDirection: 'column' }}>
          {this.props.children}
        </Content>
        <PageFooterLayout />
      </div>
    );
  }
}
