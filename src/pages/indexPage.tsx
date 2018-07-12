import React, { Component, Fragment } from 'react';
import { Card, Row, Col } from 'antd';

export default class IndexPage extends Component {
  render() {
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
        </Row>
      </Fragment>
    );
  }
}
