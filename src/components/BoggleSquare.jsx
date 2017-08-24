import React, { Component } from 'react';

class BoggleSquare extends Component {
  constructor() {
    super();
    this.toggleSelected = this.toggleSelected.bind(this);
  }

  toggleSelected() {
    if (this.props.selected) {
      this.props.deselectLetter(this.props.id);
    } else {
      this.props.selectLetter(this.props.id);
    }
  }

  render() {

    return (
      <div className={"boggle-square " + (this.props.selected ? "selected" : "")}
           onClick={this.toggleSelected}>
        <span>{this.props.letter}</span>
      </div>
    );
  }
}

export default BoggleSquare;