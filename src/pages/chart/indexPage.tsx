import React, { Component, Fragment } from 'react';
import { FORMERR } from 'dns';
import { Row, Col, Card } from 'antd';
import FoldLine from 'src/components/Chart/FoldLine';
import BarGraph from 'src/components/Chart/BarGraph';
import CakeChart from 'src/components/Chart/CakeChart';

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
