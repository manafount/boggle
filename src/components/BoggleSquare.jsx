import React, { Component } from 'react';

class BoggleSquare extends Component {
  constructor() {
    super();
    this.state = {
      selected: false
    };

    this.toggleSelected = this.toggleSelected.bind(this);
  }

  toggleSelected() {
    this.setState({selected: !this.state.selected});
  }

  render() {

    return (
      <div className={"boggle-square " + (this.state.selected ? "selected" : "")}
           onClick={this.toggleSelected}>
        <span>{this.props.letter}</span>
      </div>
    );
  }
}

export default BoggleSquare;