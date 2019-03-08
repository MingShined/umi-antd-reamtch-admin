import React from 'react';
import styles from './indexPage.less';
import store, { connect, Models } from 'src/store';
import { Button, Card, Form, Input, Icon, Row, Col } from 'antd';
import { RematchRootState, RematchDispatch } from '@rematch/core';
import { Basic } from 'src/types';
import router from 'umi/router';
import { CardTabListType } from 'antd/lib/card';
// import { getCaptcha, getVerifyCode } from 'src/services/UaaService';

const mapState = ({ app, loading }: RematchRootState<Models>) => ({
  app,
  loading: loading.effects.app.login
});
const mapDispatch = ({ app }: RematchDispatch<Models>) => ({
  appDao: app
});
interface Props
  extends Partial<ReturnType<typeof mapState>>,
    Partial<ReturnType<typeof mapDispatch>>,
    Basic.BaseProps {}

@connect(
  mapState,
  mapDispatch
)
@(Form.create() as any)
export default class LoginPage extends React.Component<Props> {
  state = {
    count: 0,
    tabKey: 'password',
    revertUrl: '',
    productCode: '',
    verifyCaptcha: '',
    transactionNo: '',
    countDown: 0
  };
  constructor(props) {
    super(props);
    // this.getVerifyCaptcha();
  }
  async getVerifyCaptcha() {
    const { data, status } = await getCaptcha('image-char-captcha');
    this.setState({
      verifyCaptcha: `data:image/png;base64,${data.image}`,
      productCode: data.productCode,
      transactionNo: data.transactionNo
    });
  }
  componentDidMount() {
    // const revertUrl = this.props.location.query.revertUrl;
    // this.setState({ revertUrl });
  }
  /**
   * 刷新验证码
   */
  handleRefreshCode = () => {
    this.getVerifyCaptcha();
    // this.setState({ count: this.state.count + 1 });
  };
  handleSmCode = async () => {
    const phoneNum = this.props.form.getFieldValue('phoneNum');
    if (!phoneNum) {
      return;
    }
    const { status } = await getVerifyCode({ phoneNum });
    if (status === 200) {
      await this.setState({ countDown: 60 });
      // 倒计时
      const setCountDown = () => {
        const countDown = this.state.countDown - 1;
        this.setState({ countDown });
        if (countDown !== 0) {
          setTimeout(() => {
            setCountDown();
          }, 1000);
        }
      };
      setCountDown();
    }
  };
  handleSubmit = ev => {
    ev.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (err) {
        return;
      }
      const falg = await this.props.appDao.login({
        ...values,
        // rememberMe: true,
        productCode: this.state.productCode,
        // verifyCaptcha: this.state.verifyCaptcha,
        transactionNo: this.state.transactionNo,
        grantType: this.state.tabKey,
        endpoint: 'pc-web'
      });
      if (falg) {
        if (this.state.revertUrl) {
          location.href = decodeURIComponent(this.state.revertUrl);
        } else {
          router.push('/');
        }
      } else {
        this.getVerifyCaptcha();
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    //     password: "123456"
    // rememberMe: true
    // username: "15394415683"
    // verifyCaptcha: "121212"
    const tabList: CardTabListType[] = [
      {
        key: 'password',
        tab: '密码登录'
      },
      {
        key: 'verify_code',
        tab: '验证码登录'
      }
    ];
    return (
      <div className={styles.main}>
        <Card
          className={styles.login}
          tabList={tabList}
          onTabChange={key => this.setState({ tabKey: key })}
        >
          <Form onSubmit={this.handleSubmit}>
            {this.state.tabKey === 'password' ? (
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入手机号码' }]
                })(
                  <Input
                    size="large"
                    name="username"
                    prefix={<Icon type="user" className={styles.prefixIcon} />}
                    placeholder="请输入手机号"
                  />
                )}
              </Form.Item>
            ) : (
              <Form.Item>
                {getFieldDecorator('phoneNum', {
                  rules: [{ required: true, message: '请输入手机号码' }]
                })(
                  <Input
                    size="large"
                    name="phoneNum"
                    prefix={<Icon type="user" className={styles.prefixIcon} />}
                    placeholder="请输入手机号"
                  />
                )}
              </Form.Item>
            )}
            {this.state.tabKey === 'password' && (
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码' }]
                })(
                  <Input
                    size="large"
                    name="password"
                    prefix={<Icon type="lock" className={styles.prefixIcon} />}
                    type="password"
                    placeholder="请输入密码"
                  />
                )}
              </Form.Item>
            )}
            {this.state.tabKey === 'password' ? (
              <Form.Item>
                <Row>
                  <Col span={14}>
                    {getFieldDecorator('verifyCaptcha', {
                      rules: [{ required: true, message: '请输入验证码' }]
                    })(
                      <Input
                        size="large"
                        prefix={
                          <Icon type="safety" className={styles.prefixIcon} />}
                        placeholder="请输入验证码"
                      />
                    )}
                  </Col>
                  <Col span={10} style={{ textAlign: 'right' }}>
                    <img
                      style={{ height: 36 }}
                      onClick={this.handleRefreshCode}
                      src={this.state.verifyCaptcha}
                    />
                  </Col>
                </Row>
              </Form.Item>
            ) : (
              <Form.Item>
                <Row>
                  <Col span={13}>
                    {getFieldDecorator('verifyCode', {
                      rules: [{ required: true, message: '请输入验证码' }]
                    })(
                      <Input
                        size="large"
                        prefix={
                          <Icon type="safety" className={styles.prefixIcon} />}
                        placeholder="请输入验证码"
                      />
                    )}
                  </Col>
                  <Col span={11} style={{ textAlign: 'right' }}>
                    <Button
                      size="large"
                      style={{ width: 112 }}
                      disabled={this.state.countDown !== 0}
                      onClick={this.handleSmCode}
                    >
                      {this.state.countDown === 0
                        ? '获取验证码'
                        : `${this.state.countDown}秒`}
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            )}
            <Form.Item>
              <Button
                size="large"
                style={{ width: '100%' }}
                type="primary"
                htmlType="submit"
                loading={this.props.loading}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}
