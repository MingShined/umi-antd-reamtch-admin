import React, { Component, Fragment } from 'react';
import FoldLine from '../../components/Chart/FoldLine';
import { FORMERR } from 'dns';
import { Row, Col, Card } from 'antd';
import BarGraph from '../../components/Chart/BarGraph';
import CakeChart from '../../components/Chart/CakeChart';

export default class ChartPage extends Component {
  render() {
    return (
      <Fragment>
        <Row gutter={16} style={{ marginBottom: '20px' }}>
          <Col span={12}>
            <Card title="折线图">
              <FoldLine />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="柱状图">
              <BarGraph />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginBottom: '20px' }}>
          <Col span={12}>
            <Card title="饼图">
              <CakeChart />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="柱状图">
              <BarGraph />
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
