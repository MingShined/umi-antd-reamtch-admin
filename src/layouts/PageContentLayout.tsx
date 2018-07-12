import React, { Component } from 'react';
import { Layout } from 'antd';
import PageFooterLayout from './PageFooterLayout';
const { Content } = Layout;

export default class BasicLayout extends Component {
  render() {
    return (
      <div style={{ overflowY: 'auto', overflowX: 'hidden' }}>
        <Content
          style={{
            margin: '24px 24px 0',
            // padding: 24,
            minHeight: '760px'
          }}
        >
          {this.props.children}
        </Content>
        <PageFooterLayout />
      </div>
    );
  }
}
