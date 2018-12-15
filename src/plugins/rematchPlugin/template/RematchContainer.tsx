import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from 'src/store';

class RematchContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>{this.props.children}</div>
      </Provider>
    );
  }
}

export default RematchContainer;
