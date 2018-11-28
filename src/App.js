import React, { Component } from 'react';
import './App.css';

import Top from './components/Top/Top';
import Middle from './components/Middle/Middle';

class App extends Component {
  render() {
    return (
      <div>
        <Top />
        <Middle />
      </div>
    );
  }
}

export default App;
