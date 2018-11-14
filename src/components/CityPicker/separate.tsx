// /**
//  * @name 非级联
//  */
// import React, { Component, Fragment } from 'react';
// import { Input, Form, Select, Col } from 'antd';
// import BaseProps from 'src/declare/baseProps';
// import { addressList } from 'src/utils/address';
// import { CityPickerProps } from 'src/components/CityPicker';
// const FormItem = Form.Item;
// const Option = Select.Option;

// export default class Separate extends Component<CityPickerProps, any> {
//   handleProvinceChange = value => {
//     this.props.form.resetFields(['city', 'area']);
//     this.forceUpdate();
//   };
//   handleCityChange = value => {
//     this.props.form.resetFields(['area']);
//     this.forceUpdate();
//   };
//   render() {
//     const { form, colStyle, showCity, showArea } = this.props;
//     const { getFieldDecorator } = form;
//     let cityList = [];
//     let areaList = [];
//     const province = this.props.form.getFieldValue('province');
//     if (province && province !== '') {
//       cityList = addressList.find(item => item.label === province).children;
//     }
//     const city = this.props.form.getFieldValue('city');
//     if (city && city !== '') {
//       areaList = cityList.find(item => item.label === city).children;
//     }
//     return (
//       <Fragment>
//         <Col {...colStyle}>
//           <FormItem label="省份">
//             {getFieldDecorator('province', {
//               // initialValue: ''
//             })(
//               <Select
//                 showSearch
//                 placeholder="请选择"
//                 optionFilterProp="children"
//                 style={{ width: '100%' }}
//                 onChange={this.handleProvinceChange}
//                 allowClear
//               >
//                 <Option value="">请选择</Option>
//                 {addressList &&
//                   addressList.length > 0 &&
//                   addressList.map(item => (
//                     <Option key={item.label} value={item.label}>
//                       {item.label}
//                     </Option>
//                   ))}
//               </Select>
//             )}
//           </FormItem>
//         </Col>
//         {showCity && (
//           <Col {...colStyle}>
//             <FormItem label="城市">
//               {getFieldDecorator('city', {
//                 // initialValue: ''
//               })(
//                 <Select
//                   showSearch
//                   placeholder="请选择"
//                   optionFilterProp="children"
//                   style={{ width: '100%' }}
//                   allowClear
//                   onChange={this.handleCityChange}
//                 >
//                   <Option value="">请选择</Option>
//                   {cityList &&
//                     cityList.length > 0 &&
//                     cityList.map(item => (
//                       <Option key={item.label} value={item.label}>
//                         {item.label}
//                       </Option>
//                     ))}
//                 </Select>
//               )}
//             </FormItem>
//           </Col>
//         )}
//         {showCity && showArea && (
//           <Col {...colStyle}>
//             <FormItem label="区域">
//               {getFieldDecorator('area', {
//                 // initialValue: ''
//               })(
//                 <Select
//                   showSearch
//                   placeholder="请选择"
//                   optionFilterProp="children"
//                   style={{ width: '100%' }}
//                   allowClear
//                 >
//                   <Option value="">请选择</Option>
//                   {areaList &&
//                     areaList.length > 0 &&
//                     areaList.map(item => (
//                       <Option key={item.label} value={item.label}>
//                         {item.label}
//                       </Option>
//                     ))}
//                 </Select>
//               )}
//             </FormItem>
//           </Col>
//         )}
//       </Fragment>
//     );
//   }
// }
