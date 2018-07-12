import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import router from 'umi/router';

export default class NotFound extends Component {
  render() {
    return (
      <div style={{ paddingTop: '150px' }}>
        <Row>
          <Col offset={4} span={8}>
            <div
              style={{
                width: '430px',
                height: '360px',
                background:
                  'url("https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg")'
              }}
            />
          </Col>
          <Col span={8}>
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 600,
                color: 'rgb(67, 78, 89)'
              }}
            >
              404
            </h1>
            <p style={{ fontSize: '20px', color: 'rgba(0, 0, 0, 0.45)' }}>
              抱歉，你访问的页面不存在
            </p>
            <Button type="primary" onClick={() => router.push('/')}>
              返回首页
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
