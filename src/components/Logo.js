import React, { Component, PropTypes } from 'react';

class Logo extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,   
  }

  render() {
    return (
      <object type="image/svg+xml" data={this.props.src} className="logo">
      </object>
    );
  }
}

export default Logo;