import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Form } from 'antd';
import CityPicker from 'src/components/CityPicker';
import BaseProps from 'src/declare/baseProps';
import DatePick from 'src/components/DatePick';

const FormItem = Form.Item;

@(Form.create as any)()
export default class IndexPage extends Component<BaseProps> {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <Row gutter={16}>
          <Col md={6}>
            <Card style={{ height: '200px' }}>下雨淋了一身</Card>
          </Col>
          <Col md={6}>
            <Card style={{ height: '200px' }}>下雨淋了一身</Card>
          </Col>
          <Col md={6}>
            <Card style={{ height: '200px' }}>下雨淋了一身</Card>
          </Col>
          <Col md={6}>
            <Card style={{ height: '200px' }}>下雨淋了一身</Card>
          </Col>
          <Form>
            <FormItem label="请选择城市">
              {getFieldDecorator('city')(<CityPicker placeholder="请选择" />)}
            </FormItem>
            <FormItem label="请选择日期">
              {getFieldDecorator('date')(<DatePick placeholder="请选择111" />)}
            </FormItem>
          </Form>
        </Row>
      </Fragment>
    );
  }
}
