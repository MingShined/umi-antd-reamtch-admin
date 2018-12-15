import { FormItemProps } from 'antd/lib/form';
import { RowProps } from 'antd/lib/row';
import { BaseButtonProps } from 'antd/lib/button/button';
import { Basic } from 'src/types';
import { GetFieldDecoratorOptions, FormProps } from 'antd/lib/form/Form';

export declare type placeType = 'left' | 'right';

export interface FormDataProps {
  key: string;
  options?: GetFieldDecoratorOptions;
  node: React.ReactNode;
  label?: string;
}

export interface ButtonProps {
  place?: placeType;
  isSubmitBtn?: boolean;
  isResetBtn?: boolean;
  submitText?: string;
  resetText?: string;
  submitBtnProps?: BaseButtonProps;
  resetBtnProps?: BaseButtonProps;
}

export default interface CommonFormProps extends Basic.BaseProps {
  formData: FormDataProps[];
  rowNum?: number;
  formProps?: FormProps;
  formItemProps?: FormItemProps;
  rowProps?: RowProps;
  btnProps?: ButtonProps;
  onSubmit?: (err: any, value: any) => any;
  onReset?: () => any;
}
