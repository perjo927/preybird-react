import React, { Component } from 'react';
import './ContentCard.css';

class ContentCard extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { "img": "http://placehold.it/350x150" };

  // }

  // componentDidMount() {
  //   this.setState({
  //     img: this.props.img
  //   });
  // }

  render() {

    return (
      <div className="Content-card">
        <picture>
          {/*<source srcset="xyz-wide.png" media="(min-width: 1024px)"/>*/}
          <img src="{this.props.img}" alt="{this.props.title}" />
        </picture>
      </div>
    );
  }
}

export default ContentCard;
