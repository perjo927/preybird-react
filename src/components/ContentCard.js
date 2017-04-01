import React, { Component } from 'react';
import './ContentCard.css';

class ContentCard extends Component {
  img = "http://placehold.it/350x150"
  

  render() {
    console.log(this.props)

    return (
      <div className="Content-card">
        <picture>
          {/*<source srcset="{xyz-wide}" media="(min-width: 1024px)"/>*/}
          <img src="{this.props.img}" alt="{this.props.title}" />
        </picture>
      </div>
    );
  }
}

export default ContentCard;
