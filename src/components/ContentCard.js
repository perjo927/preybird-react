import React, { Component } from 'react';
import './ContentCard.css';

class ContentCard extends Component {
  render() {
    // TODO: inject sizes
    return (
      <div className="Content-card">        
          <img src={this.props.srcS}
              srcSet={`${this.props.srcS} 240w, ${this.props.srcL} 480w`} 
              sizes="(min-width: 500px) and (max-width: 650px) 480px, 240px"
              alt={this.props.title} />
      </div>
    );
  }
}

export default ContentCard;