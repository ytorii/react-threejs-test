import React, { Component } from 'react';
import MaterialBox from './components/MaterialBox';
import MaterialSphere from './components/MaterialSphere';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MaterialSphere id="threejs-material" width="640" height="540" />
      </div>
    );
  }
}

export default App;
