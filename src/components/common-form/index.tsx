/**
 * @name 通用Form表单组件
 * @author MingShined
 */
import React, { Component } from 'react';
import { Form, Input, Row, Col, Button, message } from 'antd';
import _ from 'lodash';
import styles from './index.less';
import CommonFormProps, { ButtonProps, FormDataProps } from './type';
import { renderFormItem, renderFormItemOptions, initBtnProps } from './uitls';

@(Form.create as any)()
export default class CommonForm extends Component<CommonFormProps> {
  static defaultProps: Partial<CommonFormProps> = {
    rowNum: 4,
    formProps: {
      layout: 'inline'
    }
  };
  btnProps: ButtonProps = initBtnProps();
  handleSubmit = e => {
    e.preventDefault();
    const { form, onSubmit } = this.props;
    form.validateFields((err, values) => {
      onSubmit(err, values);
    });
  };
  hanldeReset = () => {
    const { form, onReset } = this.props;
    form.resetFields();
    onReset();
  };
  render() {
    const { form: { getFieldDecorator }, formData, rowNum, formItemProps, rowProps, formProps, btnProps } = this.props;
    const { place, isSubmitBtn, isResetBtn, submitText, resetText, submitBtnProps, resetBtnProps } 
    = { ...this.btnProps, ...btnProps };
    const chunkfFormData: FormDataProps[][] = _.chunk(formData, rowNum);
    return (
      <Form onSubmit={this.handleSubmit} className={styles.commonForm} {...formProps} >
        {renderFormItem(chunkfFormData, rowProps, rowNum, formItemProps, getFieldDecorator)}
        {renderFormItemOptions(isSubmitBtn, isResetBtn, place, submitText, resetText, submitBtnProps, resetBtnProps, 
        this)}
      </Form>
    );
  }
}
