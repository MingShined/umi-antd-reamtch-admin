import React, { Component, Fragment } from 'react';
import { Input, Form, Select, Col } from 'antd';
import BaseProps from 'src/declare/baseProps';
import Separate from 'src/components/CityPicker/separate';
import Cascade from 'src/components/CityPicker/cascade';

export interface CityPickerProps extends BaseProps {
  showCity?: boolean;
  showArea?: boolean;
  cascade?: boolean;
  placeholder?: string;
  changeOnSelect?: boolean;
}

export default class CityPicker extends Component<CityPickerProps, any> {
  static defaultProps: CityPickerProps = {
    showCity: true,
    showArea: true,
    cascade: true,
    changeOnSelect: false
  };
  render() {
    const { showCity, showArea, cascade, onChange, value, placeholder, changeOnSelect } = this.props;
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
