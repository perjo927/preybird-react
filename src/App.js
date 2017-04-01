import React, { Component } from 'react';
import GridView from './components/GridView';
import ContentCard from './components/ContentCard';
import logo from './assets/logo.svg';
import './App.css';

// TODO: movie-list-service
import * as movieData from './services/MockMovieData';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playData: []
    };
  }

  componentDidMount() {
    // TODO ES6 async await
    fetch(`https://content.viaplay.se/pc-se/serier/samtliga`)
      .then(res => {
        // console.log(res.json())
        return res.json()
      }).
      then((data) => {
        console.log(data)
        const extractedList = data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
        const mappedData = this.mapPlayData(extractedList);
        this.setState({ "playData": mappedData });
        console.log(this.state.playData);
        
      })
      .catch(err => {
        console.error(err);
      });
  }

  mapPlayData(data) {
    return data.map((d) => {
      return {
        "img": d.content.images.boxart.url,
        "title": d._links.self.title,
        "href": d._links.self.title
      }
    });
  }

  render() {

    const data = movieData.MovieData._embedded['viaplay:blocks'][0]._embedded['viaplay:products'];
    // const d = data[0];

    const movies = this.mapPlayData(data);
    // console.log(movies);

    const movieCards = movies.map((movie) =>
      // <img key="{movie.img}" src="{movie.img}" />
      <div>        
        <h6>{movie.title}</h6>
        <ContentCard key="{index}" 
                    img="{movie.img}" 
                    title="{movie.title}">
        </ContentCard>      
      </div>
      
    );

    return (

      <div className="App">
        <header>
          <object type="image/svg+xml" data={logo} className="logo">
          </object>
          <h1>perplay</h1>
        </header>

        <main>
          <GridView>
          {/*<div className="Grid-view">*/}
          {movieCards}
          {/*</div>*/}
          </GridView>
        </main>

        <footer></footer>
      </div>
    );
  }
}

export default App;
