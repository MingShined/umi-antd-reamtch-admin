/**
 * @name 选择框Item
 * @author MingShined
 */
import React, { Component, Fragment } from 'react';
import { Basic } from 'src/types';
import { Checkbox, Row, Col, Button } from 'antd';
import CheckItemChildren from './CheckItemChildren';
import { findLocationDevicesCar } from 'src/services/CarService';
import { spawn } from 'child_process';

interface CheckItemProps extends Basic.BaseProps {
  labelKey?: string;
  data: any;
  checkedAll: boolean;
  onCheck: (checkAll: any, checked: boolean, data: any) => any;
  renderExtra?: (item: any) => any;
  renderLabel: (item: any) => any;
  isPosition?: boolean;
}
interface CheckItemState {
  checked: boolean;
  isExpand: boolean;
  deviceList: any[];
}

export default class CheckItem extends Component<
  CheckItemProps,
  CheckItemState
> {
  state = {
    checked: false,
    isExpand: false,
    deviceList: []
  };
  componentWillReceiveProps(props) {
    const { checkedAll } = props;
    if (checkedAll !== null) {
      this.setState({
        checked: checkedAll
      });
    }
  }
  handleCheckChange = e => {
    const { onCheck, data, isPosition } = this.props;
    const checked = e.target.checked;
    this.setState({
      checked
    });
    onCheck(null, checked, data);
    if (!isPosition) {
      return;
    }
    if (checked) {
      this.getCurCarDevices();
    }
    this.setState({
      deviceList: checked ? this.state.deviceList : [],
      isExpand: checked
    });
  };
  getCurCarDevices = async () => {
    const { data, status } = await findLocationDevicesCar({
      carId: this.props.data.carId
    });
    if (status === 200 && data) {
      this.setState({
        deviceList: data.deviceList
      });
    }
  };
  render() {
    const { labelKey, data, renderExtra, renderLabel, isPosition } = this.props;
    const { checked, isExpand, deviceList } = this.state;
    return (
      <Fragment>
        <Row style={{ display: 'block', width: '100%' }}>
          <Col span={24}>
            <Checkbox
              checked={checked}
              onChange={this.handleCheckChange}
              style={{ display: 'block', width: '100%' }}
            >
              {renderLabel(data)}
              {renderExtra && (
                <span style={{ float: 'right', marginRight: 20 }}>
                  {renderExtra(data)}
                </span>
              )}
            </Checkbox>
          </Col>
          {isPosition && isExpand && (
            <Col span={24} style={{ margin: '10px 0 10px 20px' }}>
              {deviceList.length > 0 &&
                deviceList.map((item, index) => (
                  <CheckItemChildren
                    key={index}
                    dataSource={item}
                    renderLabel={value => value.deviceType}
                    index={index}
                    renderExtra={value => <span style={{ marginLeft: -35 }}>{value.detailStatus}</span>}
                  />
                ))}
              <Row style={{ margin: '10px 0 0 -20px' }}>
                <Col span={8}>
                  <Button type="primary" size="small">
                    关注
                  </Button>
                </Col>
                <Col span={8} push={8}>
                  <Button
                    type="primary"
                    size="small"
                    onClick={() => this.setState({ isExpand: false })}
                  >
                    收起
                  </Button>
                </Col>
              </Row>
            </Col>
          )}
        </Row>
      </Fragment>
    );
  }
}
