import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css';

import BoggleGrid from './BoggleGrid';
import Scoreboard from './Scoreboard';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="boggle-header">
          <img src={logo} className="boggle-logo" alt="logo" />
        </div>

        <BoggleGrid/>
        <Scoreboard/>
      </div>
    );
  }
}

export default App;
