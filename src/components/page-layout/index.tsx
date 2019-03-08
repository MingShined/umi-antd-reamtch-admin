/**
 * @name 全局路由页组件
 * @author MingShined
 */
import React, { Component, Fragment } from 'react';
import { Basic } from 'src/types';
import { Icon, Breadcrumb } from 'antd';
import store, { connect, Models } from 'store';
import { RematchRootState, RematchDispatch } from '@rematch/core';
import Link from 'umi/link';
import _ from 'lodash';

const mapState = ({ ['app']: state }: RematchRootState<Models>) => ({
  ...state
});
const mapDispatch = ({  }: RematchDispatch<Models>) => ({});
interface Props
  extends Partial<ReturnType<typeof mapState>>,
    Partial<ReturnType<typeof mapDispatch>>,
    Basic.BaseProps {
  extra?: React.ReactNode;
}

@connect(
  mapState,
  mapDispatch
)
export default class PageLayout extends Component<Props> {
  render() {
    const { children, extra, breadCrumbs, collapsed } = this.props;
    return (
      <div style={{ overflow: 'auto' }}>
        <div
          style={{
            padding: '15px 25px 15px 0',
            backgroundColor: '#fff',
            margin: 0,
            position: 'fixed',
            top: 64,
            width: 'calc(100% - 256px)',
            zIndex: 99,
            // lineHeight: '65px',
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <Icon
              className="trigger"
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              style={{ fontSize: '24px' }}
              onClick={() => store.dispatch.app.updateState({ collapsed: !collapsed })}
            />
            <Breadcrumb style={{ display: 'inline' }} separator=" > ">
              {breadCrumbs.map(item => (
                <Breadcrumb.Item key={item.path}>
                  {item.type === 'Item' ? (
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  ) : (
                    <Fragment>
                      <span>{item.title}</span>
                    </Fragment>
                  )}
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </div>
          <div style={{ float: 'right' }}>{extra}</div>
        </div>
        <div style={{ margin: '78px 24px 24px 24px', overflow: 'auto' }}>
          {children}
        </div>
      </div>
    );
  }
}
