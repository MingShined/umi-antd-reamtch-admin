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
import styles from './index.less';

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
      <Fragment>
        <div className={styles.pageLayout}>
          <div>
            <Icon
              className={styles.trigger}
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() =>
                store.dispatch.app.updateState({ collapsed: !collapsed })
              }
            />
            <Breadcrumb
              style={{ display: 'inline', marginLeft: 20 }}
              separator=" > "
            >
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
          <div>{extra}</div>
        </div>
        <div
          style={{ padding: '24px', overflow: 'auto', display: 'flex', flex: 1 }}
        >
          {children}
        </div>
      </Fragment>
    );
  }
}
