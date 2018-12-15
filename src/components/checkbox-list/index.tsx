/**
 * @name 多选列表通用组件
 * @author MingShined
 */
import React, { Component, Fragment } from 'react';
import { List, Checkbox, Button } from 'antd';
import { Basic } from 'src/types';
import CheckItem from './checkItem';
import { ListProps } from 'antd/lib/list';

interface CheckBoxListProps extends Basic.BaseProps {
  dataSource: any[];
  border?: boolean;
  renderExtra?: (item: any) => any;
  renderLabel: (item: any) => any;
  onChange?: (data: any) => any;
  style?: React.CSSProperties;
  isLoadMore?: boolean;
  onLoadMore?: () => any;
  loading?: boolean;
  isPosition?: boolean;
  listProps?: Partial<ListProps>;
}

interface CheckBoxListState {
  checkedAll: boolean;
  checkedData: any[];
}

export default class CheckBoxList extends Component<
  CheckBoxListProps,
  CheckBoxListState
> {
  static defaultProps = {
    border: false,
    isLoadMore: false,
    loading: false,
    isPosition: false
  };
  state = {
    checkedAll: null,
    checkedData: [],
    page: 0
  };
  handleCheck = (value, checked, data) => {
    const checkedData = this.state.checkedData;
    const result = checked
      ? [...checkedData, data]
      : checkedData.filter(item => item.id !== data.id);
    this.setState(
      {
        checkedAll: value,
        checkedData: result
      },
      () => {
        this.props.onChange(result);
      }
    );
  };
  handleCheckAll = e => {
    const checkedAll = e.target.checked;
    const { dataSource, onChange } = this.props;
    const result = checkedAll ? dataSource : [];
    this.setState({ checkedAll, checkedData: result }, () => {
      onChange(result);
    });
  };
  render() {
    const {
      dataSource,
      border,
      renderExtra,
      labelKey,
      renderLabel,
      style,
      isLoadMore,
      onLoadMore,
      loading,
      isPosition,
      listProps
    } = this.props;
    const { checkedAll } = this.state;
    const loadMore = (
      <div
        style={{
          textAlign: 'center',
          marginTop: 10,
          marginBottom: 10,
          height: 32,
          lineHeight: '32px'
        }}
      >
        <Button type="primary" size="small" onClick={onLoadMore}>
          加载更多
        </Button>
      </div>
    );
    return (
      <div style={style}>
        <List
          size="small"
          header={
            <Checkbox
              indeterminate={!checkedAll}
              onChange={this.handleCheckAll}
              checked={checkedAll}
            >
              全选
            </Checkbox>
          }
          bordered={border}
          loadMore={isLoadMore && loadMore}
          dataSource={dataSource}
          loading={loading}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <CheckItem
                checkedAll={checkedAll}
                labelKey={labelKey}
                data={item}
                onCheck={(value, checked, data) =>
                  this.handleCheck(value, checked, data)
                }
                renderExtra={renderExtra}
                renderLabel={renderLabel}
                isPosition={isPosition}
              />
            </List.Item>
          )}
          {...listProps}
        />
      </div>
    );
  }
}
