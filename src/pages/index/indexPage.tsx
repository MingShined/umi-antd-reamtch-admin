import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Form } from 'antd';
import CityPicker from 'src/components/CityPicker';
import BaseProps from 'src/declare/baseProps';
import DatePick from 'src/components/DatePick';
import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmap';

const FormItem = Form.Item;

@(Form.create as any)()
export default class IndexPage extends Component<BaseProps> {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <Map
          center={{ lng: 116.402544, lat: 39.928216 }}
          zoom="21"
          style={{ height: 700 }}
        >
          <Marker position={{ lng: 116.402544, lat: 39.928216 }} />
          <NavigationControl />
          <InfoWindow
            position={{ lng: 116.402544, lat: 39.928216 }}
            text="内容"
            title="标题"
          />
        </Map>
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
