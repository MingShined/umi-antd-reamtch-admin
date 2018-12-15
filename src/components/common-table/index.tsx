/**
 * @name 通用表格
 * @author MingShined
 */
import React, { Component, Fragment } from 'react';
import { Table } from 'antd';
import { ColumnProps, TableProps } from 'antd/lib/table';
import { Basic } from 'src/types';
import { PaginationProps } from 'antd/lib/pagination';

interface PageProps {
  total: number;
  page: number;
  size?: number;
}

interface CommonTableProps extends Basic.BaseProps, TableProps<any> {
  columns: ColumnProps<any>[];
  pageProps?: PageProps;
  onPageChange?: (page: number, pageSize?: number) => void;
  checkable?: boolean;
  onCheck?: (
    selectedRowKeys: string[] | number[],
    selectedRows: Object[]
  ) => void;
  rowKey: string | ((record: any, index: number) => string);
}

const getPageProps = (that: CommonTable): PaginationProps => {
  const { pageProps } = that.props;
  if (!pageProps) {
    return null;
  }
  const {
    pageProps: { total, page, size },
    onPageChange
  } = that.props;
  return {
    total,
    current: page + 1 || 1,
    defaultPageSize: size || 10,
    showQuickJumper: true,
    showTotal: (t, range) =>
      `共${total}条数据 第${page + 1}页 / 共${Math.ceil(
        total / (size || 10)
      )}页`,
    onChange: (pageValue, sizeValue) => {
      onPageChange(pageValue - 1, sizeValue);
    }
  };
};

const getRowSelection = (that: CommonTable) => {
  return {
    onChange: (selectedRowKeys, selectedRows) => {
      that.props.onCheck(selectedRowKeys, selectedRows);
    }
  };
};

export default class CommonTable extends Component<CommonTableProps> {
  static defaultProps: Partial<CommonTableProps> = {
    bordered: true,
    isShowPage: false
  };
  render() {
    return (
      <Table
        rowSelection={this.props.checkable && getRowSelection(this)}
        pagination={getPageProps(this)}
        {...this.props}
      />
    );
  }
}
