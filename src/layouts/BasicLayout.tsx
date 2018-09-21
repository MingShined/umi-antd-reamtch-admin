import React, { Component } from 'react';
import { Layout } from 'antd';
import PageSiderLayout from 'src/layouts/PageSiderLayout';
import PageHeaderLayout from 'src/layouts/PageHeaderLayout';
import PageContentLayout from 'src/layouts/PageContentLayout';

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
