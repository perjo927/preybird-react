import React, { Component } from 'react';
import './GridView.css';

class GridView extends Component {
  render() {
    return (
      <div className="Grid-view">
        {this.props.children}
      </div>
    );
  }
}

export default GridView;
