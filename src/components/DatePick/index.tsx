/**
 * @Create By MingShined
 * @Date 2018/09/11
 * @name 日期选择组件
 */
import React, { Component, Fragment } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import BaseProps from 'src/declare/baseProps';
const { MonthPicker, WeekPicker, RangePicker } = DatePicker;

interface DatePickProps extends BaseProps {
  type?: string;
  showTime?: boolean;
  style?: React.CSSProperties;
  placeholder?: string;
}

const formatDate = (date, showTime: boolean = true, range: boolean = false) => {
  if (!date && !range) {
    return '';
  }
  if (date.length === 0 && range) {
    return [];
  }
  if (showTime && !range) {
    return moment(date).format('YYYY-MM-DDTHH:mm:ssZ');
  }
  if (!showTime && !range) {
    return moment(date).format('YYYY-MM-DDT00:00:00Z');
  }
  if (showTime && range) {
    return date.map(item => moment(item).format('YYYY-MM-DDTHH:mm:ssZ'));
  }
  if (!showTime && range) {
    return [
      moment(date[0]).format('YYYY-MM-DDT00:00:00Z'),
      moment(date[1]).format('YYYY-MM-DDT23:59:59Z')
    ];
  }
};

const getInitValue = (type: string, value: any) => {
  let result = null;
  switch (type) {
    case 'date':
      result = value ? moment(value) : '';
      break;
    case 'range':
      result = value && value.length > 0 ? value.map(item => moment(item)) : [];
      break;
    default:
      break;
  }
  return result;
};

export default class DatePick extends Component<DatePickProps> {
  static defaultProps = {
    type: 'date',
    showTime: false,
    placeholder: '请输入'
  };
  handleDateChange = value => {
    const { showTime } = this.props;
    const result = formatDate(value, showTime);
    this.transmitTimeValue(result);
  };
  handleRangeChange = value => {
    const { showTime } = this.props;
    const result = formatDate(value, showTime, true);
    this.transmitTimeValue(result);
  };
  transmitTimeValue = value => {
    this.props.onChange(value);
  };
  render() {
    const { type, onChange, value, showTime, style, placeholder } = this.props;
    let renderEl = null;
    const format = showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
    const myValue = getInitValue(type, value);
    const dateProps = {
      format,
      style,
      showTime,
      placeholder,
      value: myValue
    };
    switch (type) {
      case 'date':
        renderEl = (
          <DatePicker onChange={this.handleDateChange} {...dateProps} />
        );
        break;
      // case 'month':
      //   renderEl = <MonthPicker onChange={this.handleOnchange} value={value}/>;
      //   break;
      // case 'week':
      //   renderEl = <WeekPicker onChange={this.handleOnchange} value={value}/>;
      //   break;
      case 'range':
        renderEl = (
          <RangePicker onChange={this.handleRangeChange} {...dateProps} />
        );
        break;
      default:
        break;
    }
    return <Fragment>{renderEl}</Fragment>;
  }
}
