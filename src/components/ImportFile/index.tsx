/**
 * @Create By MingShined
 * @Date 2018/09/11
 * @name 文件上传组件
 */
import React, { Component } from 'react';
import { Upload, message, Button, Icon } from 'antd';
import { checkFile } from 'src/utils/utils';
import { UploadFile } from 'antd/lib/upload/interface';

interface UploadFileProps {
  btnText?: string;
  showUploadList?: boolean;
  onImport: Function;
  accept: string[];
  style?: Object;
  icon?: string;
  showIcon?: boolean;
}

interface UploadFileState {
  loading: boolean;
}

export default class ImportFile extends Component<
  UploadFileProps,
  UploadFileState
> {
  state = {
    loading: false
  };
  handleUploadFile = (
    file: UploadFile & File,
    FileList: UploadFile[]
  ): boolean => {
    checkFile({
      file,
      accept: this.props.accept
    })
      .then(() => {
        this.setState({ loading: true });
        const form = new FormData();
        form.append('file', file);
        const result = this.props.onImport(form);
        if (result) {
          this.setState({ loading: false });
        }
      })
      .catch(() => {
        message.error('上传文件格式错误');
      });
    return false;
  };
  render() {
    const { btnText, showUploadList, style, icon, showIcon } = this.props;
    const { loading } = this.state;
    return (
      <div style={style}>
        <Upload
          beforeUpload={this.handleUploadFile}
          showUploadList={showUploadList ? showUploadList : false}
        >
          <Button type="primary" loading={loading}>
            {showIcon && <Icon type={icon ? icon : 'upload'} />}
            <span>{btnText ? btnText : '上传文件'}</span>
          </Button>
        </Upload>
      </div>
    );
  }
}
