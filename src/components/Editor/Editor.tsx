import React, { Component, Fragment } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

export default class EditorComponent extends Component {
  handlChange = content => {
    // tslint:disable-next-line:no-console
    // console.log(content);
  };
  render() {
    const editorProps = {
      height: 400,
      contentFormat: 'html',
      letterSpacings: [0, 0.28, 2, 4, 6],
      autoPlay: true,
      media: {
        allowPasteImage: true, // 是否允许直接粘贴剪贴板图片（例如QQ截图等）到编辑器
        image: true // 开启图片插入功能
        // video: true, // 开启视频插入功能
        // audio: true, // 开启音频插入功能
        // uploadFn: param => {
        //   CommonService.fileUpload({ data: { file: param.file } }).then(
        //     ({ data, status }) => {
        //       if (status === 200 && data.ossUrl) {
        //         message.success('图片上传成功');
        //         param.success({
        //           url: data.ossUrl
        //         });
        //       } else {
        //         // message.error('上传失败，请重新选择图片上传');
        //         param.error({
        //           msg: '上传失败，请重新选择图片上传'
        //         });
        //       }
        //     }
        //   );
        // }
      }
    };
    return (
      <div style={{ border: '1px solid #ccc' }}>
        <BraftEditor
          {...editorProps}
          onChange={this.handlChange}
          //   initialContent={
          //     this.state.actRule !== null ? this.state.actRule : ' '
          //   }
          //   contentId={this.state.actRule ? this.state.actRule : ''}
        />
      </div>
    );
  }
}
