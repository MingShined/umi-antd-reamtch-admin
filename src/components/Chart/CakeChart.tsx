import React, { Component, Fragment } from 'react';
import { Chart, Axis, Geom, Tooltip, Coord, Legend, Label } from 'bizcharts';
import { DataSet } from '@antv/data-set';
import { Card } from 'antd';
/* 
 * 饼图 
*/
export default class FoldLine extends Component {
  render() {
    const { DataView } = DataSet;
    const data = [
      { item: '事例一', count: 40 },
      { item: '事例二', count: 21 },
      { item: '事例三', count: 17 },
      { item: '事例四', count: 13 },
      { item: '事例五', count: 9 }
    ];
    const dv = new DataView();
    dv.source(data).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    });
    const cols = {
      percent: {
        formatter: val => {
          // tslint:disable-next-line:no-parameter-reassignment
          val = val * 100 + '%';
          return val;
        }
      }
    };
    return (
      <Chart
        height={400}
        data={dv}
        scale={cols}
        padding={[80, 100, 80, 80]}
      >
        <Coord type="theta" radius={0.75} />
        <Axis name="percent" />
        <Legend
          position="right"
          offsetY={-window.innerHeight / 2 + 120}
          offsetX={-100}
        />
        <Tooltip
          showTitle={false}
          itemTpl="<li>
          <span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;>
          </span>{name}: {value}</li>"
        />
        <Geom
          type="intervalStack"
          position="percent"
          color="item"
          tooltip={[
            'item*percent',
            (item, percent) => {
              // tslint:disable-next-line:no-parameter-reassignment
              percent = percent * 100 + '%';
              return {
                name: item,
                value: percent
              };
            }
          ]}
          style={{ lineWidth: 1, stroke: '#fff' }}
        >
          <Label
            content="percent"
            formatter={(val, item) => {
              return item.point.item + ': ' + val;
            }}
          />
        </Geom>
      </Chart>
    );
  }
}
