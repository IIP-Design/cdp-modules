import React, { Component } from 'react';
import List from './containers/list_container';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  render() {
    return (
        <List config={ this.props } />
    );
  }
}

export default App;