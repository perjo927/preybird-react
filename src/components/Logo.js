import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <object type="image/svg+xml" data={this.props.src} className="logo">
      </object>
    );
  }
}

export default Logo;