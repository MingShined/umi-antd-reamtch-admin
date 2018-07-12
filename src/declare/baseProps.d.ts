import { Action } from './baseModel';
import { Location } from 'history';
import { WrappedFormUtils } from 'antd/lib/form/Form';
interface BaseProps<T = any> {
  dispatch?: (action: Action<T>) => void;
  form?: WrappedFormUtils;
  location?: Location & { query: any };
  [propsName: string]: any;
}
export default BaseProps;

export interface BaseModalProps extends BaseProps {
  isShowModal: boolean;
  onOk: Function;
  onCancel: Function;
}
