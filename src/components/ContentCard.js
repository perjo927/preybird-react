import React, { Component, PropTypes  } from 'react';
import './ContentCard.css';

class ContentCard extends Component {

  static propTypes = {
    srcS: PropTypes.string.isRequired,
    srcL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired
  }

  render() {
    const { srcS, srcL, sizes, title } = this.props

    return (
      <div className="Content-card">        
          <img src={srcS}
              srcSet={`${this.props.srcS} 240w, ${this.props.srcL} 480w`} 
              sizes={sizes}
              alt={title} />
      </div>
    );
  }
}

export default ContentCard;