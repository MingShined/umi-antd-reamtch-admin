/**
 * @name 通用弹框
 * @author MingShined
 */
import React, { Component, Fragment } from 'react';
import { Basic } from 'src/types';
import store, { connect, Models } from 'store';
import { RematchRootState, RematchDispatch } from '@rematch/core';
import { Modal, Button } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import { ButtonProps } from 'antd/lib/button';

interface CommonModalProps extends Basic.BaseProps, Partial<ModalProps> {
  btnText?: string;
  afterCancel?: () => any;
  beforeOk?: () => any;
  btnProps?: ButtonProps;
}

interface CommonModalState {
  visible: boolean;
}

export default class CommonModal extends Component<
  CommonModalProps,
  CommonModalState
> {
  static defaultProps: Partial<CommonModalProps> = {
    btnText: '新增'
  };
  state = {
    visible: false
  };
  handleCancel = () => {
    const { afterCancel } = this.props;
    this.toggleVisible(false);
    if (afterCancel) {
      afterCancel();
    }
  };
  handleOk = async () => {
    const isOk = await this.props.beforeOk();
    if (isOk) {
      this.handleCancel();
    }
  };
  toggleVisible = (visible: boolean) => {
    this.setState({ visible });
  };
  render() {
    const { children, btnText, btnProps } = this.props;
    const visible = this.state.visible;
    return (
      <Fragment>
        <Button
          type="primary"
          {...btnProps}
          onClick={() => this.toggleVisible(true)}
        >
          {btnText}
        </Button>
        <Modal
          maskClosable
          destroyOnClose
          {...this.props}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
          visible={visible}
        >
          {children}
        </Modal>
      </Fragment>
    );
  }
}
