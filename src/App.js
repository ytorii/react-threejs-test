import React, { Component } from 'react';
import TorusKnot from './components/TorusKnot';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TorusKnot id="torus-knot" width="960" height="640" />
      </div>
    );
  }
}

export default App;
