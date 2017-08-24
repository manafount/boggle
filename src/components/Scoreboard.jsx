import React, { Component } from 'react';

class Scoreboard extends Component {
  render() {
    let scorePairs;
    if (this.props.words) {
      scorePairs = this.props.words.map((word, i) => {
        return (
          <li key={'word ' + i}>
            <div className="word">{word}</div>
            <div className="score">{this.props.scores[i]}</div>
          </li>
        );
      });
    }
    return (
      <div className="scoreboard-container">
        <ul className="scoreboard">
          <li>
            <div className="word"><b>Word</b></div>
            <div className="score"><b>Score</b></div>
          </li>
          {scorePairs}
          <li>
            <div className="word"><b>Total:</b></div>
            <div className="score"><b>{this.props.totalScore}</b></div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Scoreboard;