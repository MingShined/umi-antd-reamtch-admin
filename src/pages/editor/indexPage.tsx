import React, { Component, Fragment } from 'react';
import EditorComponent from '../../components/Editor/Editor';
import UserService from '../../services/userService';

export default class EditorPage extends Component {
  async componentDidMount() {
    const { data, status } = await UserService.getTestData();
    if (data && status === 200) {
      // tslint:disable-next-line:no-console
      console.log(data);
    }
  }
  render() {
    return (
      <Fragment>
        <p>我是史上最帅的编辑器</p>
        <EditorComponent />
      </Fragment>
    );
  }
}
