
import { AxiosResponse } from 'axios';
import { Location } from 'history';
import { WrappedFormUtils } from 'antd/lib/form/Form';

export namespace Basic {
  export interface BaseResponse<T = any> extends AxiosResponse<T> {
    total?: number;
    headers: {
      'X-Total-Count'?: number;
      'x-total-count'?: number;
      totalCount?: number;
      [propName: string]: any;
    };
  }
  export interface BaseProps<T = any> {
    dispatch?: (action) => void;
    form?: WrappedFormUtils;
    location?: Location & {query: any};
    [propsName: string]: any;
  }
}
