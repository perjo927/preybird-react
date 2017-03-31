import React, { Component } from 'react';
import './ContentCard.css';

class ContentCard extends Component {

  render() {
    return (           
      <div className="Content-card">
        <picture>
          {/*<source srcset="xyz-wide.png" media="(min-width: 1024px)"/>*/}
          <img src="http://placehold.it/350x150" alt="TODO"/> 
        </picture>                     
      </div>
    );
  }
}

export default ContentCard;
