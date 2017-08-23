import React, { Component } from 'react';
import _ from 'lodash';

import logo from '../logo.png';
import '../App.css';
import BoggleGrid from './BoggleGrid';
import Scoreboard from './Scoreboard';

class App extends Component {
  constructor() {
    super();
    this.dice = [
      'aaafrs',
      'aaeeee',
      'aafirs',
      'adennn',
      'aeeeem',
      'aeegmu',
      'aegmnn',
      'afirsy',
      'bjkqxz',
      'ccenst',
      'ceiilt',
      'ceilpt',
      'ceipst',
      'ddhnot',
      'dhhlor',
      'dhlnor',
      'dhlnor',
      'eiiitt',
      'emottt',
      'ensssu',
      'fiprsy',
      'gorrvw',
      'iprrry',
      'nootuw',
      'ooottu'
    ];

    let initialDice = _.take(this.dice, 5);

    this.state = {
      rows: initialDice,
      score: 0,
      curWord: '',
      words: []
    };
    this.pickDice = this.pickDice.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  pickDice() {
    let newDice = _.take(this.dice, 5);
    this.setState({rows: newDice});
  }

  shuffle() {
    //Fisher-Yates shuffle (mutates this.dice array)
    for(let i=this.dice.length-1; i>0; i-=1) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.dice[i];
      this.dice[i] = this.dice[j];
      this.dice[j] = temp;
    }
  }

  selectLetter() {

  }

  componentWillMount() {
    this.shuffle();
    this.pickDice();
  }

  render() {
    console.log(this.state.rows);
    return (
      <div className="container">
        <div className="boggle-header">
          <img src={logo} className="boggle-logo" alt="logo" />
        </div>

        <BoggleGrid rows={this.state.rows}/>
        <Scoreboard words={this.state.words}
                    score={this.state.score}/>
      </div>
    );
  }
}

export default App;
