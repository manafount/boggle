import React, { Component } from 'react';
import _ from 'lodash';
import autobind from 'react-autobind';

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
    ].map(die => die.split(''));

    this.state = {
      tiles: [],
      totalScore: 0,
      curTiles: [],
      curWord: [],
      words: [],
      scores: []
    };

    autobind(this);
  }

  reset() {
    this.rollDice();
    this.setState({
      totalScore: 0,
      curWord: [],
      words: []
    });
  }

  rollDice() {
    let newTiles = [];
    this.dice.forEach((die, i) => {
      let letter = _.sample(die);
      letter = (letter === "q" ? "qu" : letter);
      newTiles.push({
        id: i,
        letter,
        selected: false
      });
    });
    this.setState({tiles: newTiles});
  }

  deselectAll() {
    let newTiles = [];
    this.state.tiles.forEach(tile => {
      newTiles.push({
        id: tile.id,
        letter: tile.letter,
        selected: false
      });
    });
    this.setState({tiles: newTiles});
  }

  selectLetter(id) {
    let newTiles = _.clone(this.state.tiles);
    let tile = newTiles[id];
    newTiles[id].selected = true;
    this.setState({
      tiles: newTiles,
      curTiles: this.state.curTiles.concat([tile]),
      curWord: this.state.curWord.concat([tile.letter])
    });
    return true;
  }

  deselectLetter(id) {
    if (id === _.last(this.state.curTiles).id) {
      let newTiles = _.clone(this.state.tiles);
      newTiles[id].selected = false;
      this.setState({
        tiles: newTiles,
        curTiles: _.dropRight(this.state.curTiles),
        curWord: _.dropRight(this.state.curWord)
      });
      return true;
    }else{
      return false;
    }
  }
  
  submitWord() {
    let pointsArr = [0, 0, 0, 1, 1, 2, 3, 5, 11];
    let word = this.state.curWord.join('');
    let score = (word.length >= pointsArr.length ? 11 : pointsArr[word.length]);

    if (_.includes(this.state.words, word)){
      return;
    } else {
      let newTiles = _.clone(this.state.tiles).map(tile => {
        tile.selected = false;
        return tile;
      });

      this.setState({
        tiles: newTiles,
        curTiles: [],
        curWord: [],
        words: this.state.words.concat([word]),
        scores: this.state.scores.concat([score]),
        totalScore: this.state.totalScore + score
      });
    }
  }

  componentWillMount() {
    this.rollDice();
  }

  render() {
    return (
      <div className="container">
        <div className="boggle-header">
          <img src={logo} 
               className="boggle-logo"
               alt="logo"
               onClick={this.reset}/>
        </div>

        <BoggleGrid tiles={this.state.tiles}
                    curTiles={this.state.curTiles}
                    selectLetter={this.selectLetter}
                    deselectLetter={this.deselectLetter}/>

        <div className="current-word">
          <div>
            <b>Current Word: </b> {this.state.curWord.join('').toUpperCase()}
          </div>
          <div>
            <button className="submit"
                    onClick={this.submitWord}>
              Submit Word
            </button>
          </div>
        </div>

        <Scoreboard words={this.state.words}
                    scores={this.state.scores}
                    totalScore={this.state.totalScore}/>
      </div>
    );
  }
}

export default App;
