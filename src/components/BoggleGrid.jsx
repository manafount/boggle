import React, { Component } from 'react';

import BoggleSquare from './BoggleSquare';

class BoggleGrid extends Component {
  constructor() {
    super();
  }

  render() {
    let rows;

    if(this.props.rows) {
      rows = this.props.rows.map(row => {
        return row.split('').map(letter => {
          return <BoggleSquare letter={letter}/>;
        });
      });
    }
    return (
      <div className="boggle-grid-container">
        {rows}
      </div>
    );
  }
}

export default BoggleGrid;