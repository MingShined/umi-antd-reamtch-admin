import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Modal, message } from 'antd';
import { connect } from 'dva';
import BaseProps from '../../declare/baseProps';
import Axios from 'axios';
import router from 'umi/router';
const FormItem = Form.Item;

interface UserFormProps extends BaseProps {
  userName: String;
  password: Number;
}
@connect()
@(Form.create as any)()
export default class Login extends React.Component<BaseProps, UserFormProps> {
  // componentWillUpdate() {
  //   const idToken = localStorage.getItem('idToke');
  //   if (idToken) {
  //     router.push('/');
  //   }
  // }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        message.error('请填写表单内容');
        return false;
      }
      if (values.userName === 'admin' && values.password === 'admin') {
        this.props.dispatch({
          type: 'user/login'
        });
      } else {
        message.error('登录失败');
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <div className="container">
          <Icon type="html5" className="icon" />
          <p>陈先生博客后台系统</p>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入账户名' }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="admin/cms"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="admin/666"
                />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}
