// /**
//  * @name 全局信息下拉组件
//  * @author MingShined
//  */
// import React, { Component, Fragment } from 'react';
// import { Basic } from 'src/types';
// import { Select } from 'antd';
// import { globalInfoEnum } from './type';
// import store, { connect, Models } from 'store';
// import { RematchRootState, RematchDispatch } from '@rematch/core';
// import { SelectProps } from 'antd/lib/select';

// const Option = Select.Option;

// const mapState = ({ app }: RematchRootState<Models>) => ({ app });
// const mapDispatch = ({ app }: RematchDispatch<Models>) => ({ appEffects: app });
// interface GlobalInfoSelectProps
//   extends Partial<ReturnType<typeof mapState>>,
//     Partial<ReturnType<typeof mapDispatch>>,
//     SelectProps,
//     Basic.BaseProps {
//   type: globalInfoEnum;
// }

// @connect(
//   mapState,
//   mapDispatch
// )
// export default class GlobalInfoSelect extends Component<GlobalInfoSelectProps> {
//   render() {
//     const {
//       type,
//       app: { globalInfo }
//     } = this.props;
//     if (Object.keys(globalInfo).length === 0) {
//       return false;
//     }
//     return (
//       <Select allowClear {...this.props}>
//         <Option key="empty" value="">
//           请选择
//         </Option>
//         {eval(`globalInfo.${type}`).map((item, index) => (
//             <Option key={index.toString()} value={item.id}>
//               {item.name}
//             </Option>
//           ))}
//       </Select>
//     );
//   }
// }
