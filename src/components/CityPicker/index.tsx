/**
 * @author MingShined
 * @name 省市区级联组件
 */
import React, { Component, Fragment } from 'react';
import { Input, Form, Select, Col } from 'antd';
import BaseProps from 'src/declare/baseProps';
// import Separate from 'src/components/CityPicker/separate';
import Cascade from 'src/components/CityPicker/cascade';

export interface CityPickerProps extends BaseProps {
  /** 显示城市 */
  showCity?: boolean;
  /** 显示地区 */
  showArea?: boolean;
  /** 级联 */
  cascade?: boolean;
  /** 提示语 */
  placeholder?: string;
  /** 级联模式支持单选 */
  changeOnSelect?: boolean;
  /** 非级联模式Col样式 */
  colStyle?: Object;
}

export default class CityPicker extends Component<CityPickerProps> {
  static defaultProps: CityPickerProps = {
    showCity: true,
    showArea: true,
    cascade: true,
    changeOnSelect: false,
    colStyle: {
      span: 6
    }
  };
  render() {
    const {
      showCity,
      showArea,
      cascade,
      onChange,
      value,
      placeholder,
      changeOnSelect,
      form,
      colStyle
    } = this.props;
    return (
      <Fragment>
        {cascade ? (
          <Cascade
            showCity={showCity}
            showArea={showArea}
            onChange={onChange}
            changeOnSelect={changeOnSelect}
            value={value}
            placeholder={placeholder}
          />
        ) : null}
      </Fragment>
    );
  }
}

// (
//   <Separate
//     form={form}
//     colStyle={colStyle}
//     showCity={showCity}
//     showArea={showArea}
//   />
// )
