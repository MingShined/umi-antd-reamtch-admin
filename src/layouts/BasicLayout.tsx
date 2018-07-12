import React, { Component } from 'react';
import { Layout } from 'antd';
import PageHeaderLayout from './PageHeaderLayout';
import PageContentLayout from './PageContentLayout';
import PageSiderLayout from './PageSiderLayout';

const BasicLayout = props => {
  return (
    <Layout>
      <PageSiderLayout />
      <Layout>
        <PageHeaderLayout />
        <PageContentLayout children={props.children} />
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
