import React, { Component } from 'react';

class Scoreboard extends Component {
  render() {
    return (
      <div className="scoreboard-container">
        <ul className="scoreboard">
          <li>
            <div className="word"><b>Word</b></div>
            <div className="score"><b>Score</b></div>
          </li>
          <li>
            <div className="word"><b>Total:</b></div>
            <div className="score"><b>{this.props.score}</b></div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Scoreboard;