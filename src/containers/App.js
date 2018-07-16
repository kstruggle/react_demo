import React, { Component } from 'react';
import Tab from '../components/Tab';
class App extends Component {
  render() {
    return (
      <div>
        appp
        {this.props.children}
        <Tab></Tab>
      </div>
    );
  }
}

export default App;
