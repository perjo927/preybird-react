import React, { Component } from 'react';
import './ContentCard.css';

class ContentCard extends Component {

  render() {
    return (           
      <div className="Content-card">
        <img src="{this.props.img}" alt=""/>      
      </div>
    );
  }
}

export default ContentCard;
