/**
 * @name checkbox扩展
 * @author MingShined
 */
import React, { Component, Fragment } from 'react';
import { Basic } from 'src/types';
import { Checkbox, Row, Col } from 'antd';

interface CheckItemChildrenProps extends Basic.BaseProps {
  dataSource: any;
  renderExtra?: (item: any) => any;
  renderLabel: (item: any) => any;
  index?: number;
}

export default class CheckItemChildren extends Component<
  CheckItemChildrenProps
> {
  state = {
    checked: false
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.index === 0) {
      this.setState({
        checked: true
      });
    }
  }
  handleCheckChange = (e, id) => {
    const checked = e.target.checked;
    this.setState({
      checked
    });
  };
  render() {
    const { dataSource, renderLabel, renderExtra, index } = this.props;
    const { checked } = this.state;
    return (
      <Fragment>
        <Row style={{ display: 'block', width: '100%' }}>
          <Col span={24}>
            <Checkbox
              checked={checked}
              onChange={e => this.handleCheckChange(e, dataSource.id)}
              style={{ display: 'block', width: '100%' }}
            >
              {renderLabel(dataSource)}
              {renderExtra && (
                <span style={{ float: 'right', marginRight: 20 }}>
                  {renderExtra(dataSource)}
                </span>
              )}
            </Checkbox>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
