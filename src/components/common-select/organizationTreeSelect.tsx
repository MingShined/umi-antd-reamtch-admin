// /**
//  * @name 组件名
//  * @author ZB
//  */
// import React, { Component, Fragment } from 'react';
// import store, { connect, Models } from 'store';
// import { RematchRootState, RematchDispatch } from '@rematch/core';
// import styles from './index.less';
// import { TreeSelect } from 'antd';
// const TreeNode = TreeSelect.TreeNode;

// const mapState = ({ app: { orgTree } }: RematchRootState<Models>) => ({ orgTree });
// const mapDispatch = ({ app: { getOrgTree } }: RematchDispatch<Models>) => ({ getOrgTree });
// interface Props extends Partial<ReturnType<typeof mapState>>, Partial<ReturnType<typeof mapDispatch>> {
//   value?: string | number | any[];
//   onChange?: (value: any, label: any, extra: any) => void;
//   type?: number; // 定义value类型
//   modelType?: number; // 请求渠道的参数
// }

// @connect(mapState, mapDispatch)
// export default class OrganizationTreeSelect extends Component<Props> {
//   loop = (item) => {
//     let value = item.data && item.data.id;
//     if (this.props.type === 1) {
//       value = item.data && `${item.data.id}-${item.data.name}`;
//     }
//     if (item.children) {
//       return (
//         <TreeNode value={value} key={item.data.id} title={item.data.name}>
//           {item.children.map((child, index) => this.loop(child))}
//         </TreeNode>
//       );
//     }
//     return <TreeNode value={value} key={item.data && item.data.id} title={item.data && item.data.name} />;
//   };
//   componentWillMount() {
//     this.props.getOrgTree({ modelType: this.props.modelType });
//   }
//   render() {
//     const treeDefaultExpandedKeys = [];
//     if (Object.keys(this.props.orgTree).length > 0) {
//       treeDefaultExpandedKeys.push(`${this.props.orgTree.data.id}`);
//     }
//     return (
//       treeDefaultExpandedKeys.length > 0 && (
//         <TreeSelect
//           value={this.props.value}
//           onChange={this.props.onChange}
//           showSearch
//           allowClear
//           treeDefaultExpandedKeys={treeDefaultExpandedKeys}
//           treeNodeFilterProp="title"
//           placeholder="请选择"
//         >
//           {this.loop(this.props.orgTree)}
//         </TreeSelect>
//       )
//     );
//   }
// }
