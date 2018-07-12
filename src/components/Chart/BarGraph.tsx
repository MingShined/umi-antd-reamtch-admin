import React, { Component, Fragment } from 'react';
import { Chart, Axis, Geom, Tooltip } from 'bizcharts';
import { Card } from 'antd';
/* 
 * 柱状图 
*/
export default class FoldLine extends Component {
  render() {
    const data = [
      { year: '1951 年', sales: 38 },
      { year: '1952 年', sales: 52 },
      { year: '1956 年', sales: 61 },
      { year: '1957 年', sales: 145 },
      { year: '1958 年', sales: 48 },
      { year: '1959 年', sales: 38 },
      { year: '1960 年', sales: 38 },
      { year: '1962 年', sales: 38 }
    ];
    const cols = {
      sales: { tickInterval: 20 }
    };
    return (
      <Chart height={400} data={data} scale={cols}>
        <Axis name="year" />
        <Axis name="sales" />
        <Tooltip crosshairs={{ type: 'y' }} />
        <Geom type="interval" position="year*sales" />
      </Chart>
    );
  }
}
