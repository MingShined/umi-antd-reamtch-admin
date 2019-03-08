/**
 * @name 
 * @author MingShined
 */
import React, { Component } from 'react';
import { Basic } from 'src/types';
import PageLayout from 'src/components/page-layout';

interface Props extends Basic.BaseProps {}

export default class GoodManage extends Component<Props> {
  render() {
    // const {} = this.props;
    // const {} = this.state;
    return (
      <PageLayout>
        <p>客户管理 Demo</p>
      </PageLayout>
    );
  }
}
