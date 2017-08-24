import React, { Component } from 'react';

import BoggleSquare from './BoggleSquare';

class BoggleGrid extends Component {
  render() {
    let squares;

    if(this.props.tiles) {
      squares = this.props.tiles.map((tile) => {
        return <BoggleSquare key={'tile ' + tile.id}
                             id={tile.id}
                             letter={tile.letter}
                             selected={tile.selected}
                             selectLetter={this.props.selectLetter}
                             deselectLetter={this.props.deselectLetter}/>;
      });
    }
    return (
      <div className="boggle-grid-container">
        {squares}
      </div>
    );
  }
}

export default BoggleGrid;