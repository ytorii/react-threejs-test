import React, { Component } from 'react';
import SolarSystem from './components/SolarSystem';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SolarSystem id="solar-system" />
      </div>
    );
  }
}

export default App;
