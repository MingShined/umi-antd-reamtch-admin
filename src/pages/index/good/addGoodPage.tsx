/**
 * @name
 * @author MingShined
 */
import React, { Component, Fragment } from 'react';
import { Basic } from 'src/types';
import PageLayout from 'src/components/page-layout';
import { Button } from 'antd';

interface Props extends Basic.BaseProps {}

export default class AddGoodPage extends Component<Props> {
  render() {
    // const {} = this.props;
    // const {} = this.state;
    return (
      <PageLayout extra={<Button>1</Button>}>
        <p>我是一个tsReact Demo</p>
      </PageLayout>
    );
  }
}
