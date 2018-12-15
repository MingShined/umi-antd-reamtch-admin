import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Form } from 'antd';
import CityPicker from 'src/components/city-picker';
import DatePick from 'src/components/date-picker';
import { Basic } from 'src/types';

const FormItem = Form.Item;

interface Props extends Basic.BaseProps {}

@(Form.create as any)()
export default class IndexPage extends Component<Props> {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <Form>
          <FormItem label="请选择城市">
            {getFieldDecorator('city')(<CityPicker placeholder="请选择" />)}
          </FormItem>
          <FormItem label="请选择日期">
            {getFieldDecorator('date')(<DatePick placeholder="请选择111" />)}
          </FormItem>
        </Form>
      </Fragment>
    );
  }
}
