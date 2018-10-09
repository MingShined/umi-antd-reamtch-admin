/**
 * @Create By MingShined
 * @Date 2018/09/11
 * @name 省市区级联组件
 */
import React, { Component, Fragment } from 'react';
import { Input, Form, Select, Col, Cascader } from 'antd';
import BaseProps from 'src/declare/baseProps';
import { CityPickerProps } from 'src/components/CityPicker';
import { addressList } from 'src/utils/address';
const FormItem = Form.Item;
const Option = Select.Option;

export default class Cascade extends Component<CityPickerProps, any> {
  render() {
    const {
      showCity,
      showArea,
      onChange,
      value,
      placeholder,
      changeOnSelect
    } = this.props;
    return (
      <Cascader
        placeholder={placeholder}
        options={addressList}
        changeOnSelect={changeOnSelect}
        allowClear
        onChange={onChange}
        value={value}
      />
    );
  }
}
