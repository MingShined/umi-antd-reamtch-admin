import React, { Component, Fragment } from 'react';
import EditorComponent from 'src/components/Editor/Editor';
import UserService from 'src/services/userService';

export default class EditorPage extends Component {
  render() {
    return (
      <Fragment>
        <p>我是史上最帅的编辑器</p>
        <EditorComponent />
      </Fragment>
    );
  }
}
