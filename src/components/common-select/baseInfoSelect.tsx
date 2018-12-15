// /**
//  * @name 基础信息下拉组件
//  * @author MingShined
//  */
// import React, { Component, Fragment } from 'react';
// import { Basic } from 'src/types';
// import { Select } from 'antd';
// import store, { connect, Models } from 'store';
// import { RematchRootState, RematchDispatch } from '@rematch/core';
// import { SelectProps } from 'antd/lib/select';
// import { baseInfoEnum } from './type';

// const Option = Select.Option;

// const mapState = ({ app }: RematchRootState<Models>) => ({ app });
// const mapDispatch = ({ app }: RematchDispatch<Models>) => ({ appEffects: app });
// interface BaseInfoSelectProps
//   extends Partial<ReturnType<typeof mapState>>,
//     Partial<ReturnType<typeof mapDispatch>>,
//     SelectProps,
//     Basic.BaseProps {
//   type: baseInfoEnum;
// }

// @connect(
//   mapState,
//   mapDispatch
// )
// export default class BaseInfoSelect extends Component<BaseInfoSelectProps> {
//   state = {
//     data: []
//   };
//   render() {
//     const {
//       type,
//       app: { baseInfo }
//     } = this.props;
//     if (Object.keys(baseInfo).length === 0) {
//       return false;
//     }
//     return (
//       <Fragment>
//         <Select allowClear {...this.props}>
//           <Option key="empty" value="">
//             请选择
//           </Option>
//           {eval(`baseInfo.${type}`).map((item, index) => (
//             <Option key={index.toString()} value={item.dictValue}>
//               {item.dictValue}
//             </Option>
//           ))}
//         </Select>
//       </Fragment>
//     );
//   }
// }
