import React, { Component, Fragment } from 'react';
import { Chart, Axis, Geom, Tooltip } from 'bizcharts';
import { Card } from 'antd';
/* 
 * 折线图 
*/
export default class FoldLine extends Component {
  render() {
    const data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 1 },
      { year: '1996', value: 4.5 }
    ];

    const cols = {
      value: { min: 0 },
      year: { range: [0, 1] }
    };
    return (
      <Chart height={400} data={data} scale={cols}>
        <Axis name="year" />
        <Axis name="value" />
        <Tooltip crosshairs={{ type: 'y' }} />
        <Geom type="line" position="year*value" size={2} />
        <Geom
          type="point"
          position="year*value"
          size={4}
          shape={'circle'}
          style={{ stroke: '#fff', lineWidth: 1 }}
        />
      </Chart>
    );
  }
}
