import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'antd';
import { FormDataProps, placeType, ButtonProps } from './type';
import { RowProps } from 'antd/lib/row';
import { FormItemProps } from 'antd/lib/form';
import { GetFieldDecoratorOptions } from 'antd/lib/form/Form';
import { BaseButtonProps } from 'antd/lib/button/button';
import { func } from 'prop-types';

const FormItem = Form.Item;

export function renderFormItem<T>(
  chunkfFormData: FormDataProps[][],
  rowProps: RowProps,
  rowNum: number,
  formItemProps: FormItemProps,
  getFieldDecorator
): React.ReactNode {
  return chunkfFormData.map((item, index) => (
    <Row {...rowProps} key={index}>
      {item.map(item2 => (
        <Col span={24 / rowNum} key={item2.key}>
          <FormItem {...formItemProps} label={item2.label}>
            {getFieldDecorator(item2.key, item2.options)(item2.node)}
          </FormItem>
        </Col>
      ))}
    </Row>
  ));
}

export function renderFormItemOptions<T>(
  isSubmitBtn: boolean,
  isResetBtn: boolean,
  place: placeType,
  submitText: string,
  resetText: string,
  submitBtnProps: BaseButtonProps,
  resetBtnProps: BaseButtonProps,
  that
) {
  return (
    (isSubmitBtn || isResetBtn) && (
      <Row style={{ margin: '20px 0 0 0 ' }}>
        <div style={{ float: place }}>
          <Col>
            {isSubmitBtn && (
              <Button
                {...submitBtnProps}
                style={{ marginRight: 10 }}
                htmlType="submit"
              >
                {submitText}
              </Button>
            )}
            {isResetBtn && (
              <Button onClick={that.hanldeReset} {...resetBtnProps}>
                {resetText}
              </Button>
            )}
          </Col>
        </div>
      </Row>
    )
  );
}

export function initBtnProps<T>(): ButtonProps {
  return {
    place: 'right',
    isSubmitBtn: true,
    isResetBtn: true,
    submitText: '搜索',
    resetText: '重置',
    submitBtnProps: {
      type: 'primary'
    },
    resetBtnProps: {
      type: 'danger'
    }
  };
}