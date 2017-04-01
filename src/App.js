import React, { Component } from 'react';
import GridView from './components/GridView';
import ContentCard from './components/ContentCard';
import logo from './assets/logo.svg';
import './App.css';

// TODO: movie-list-service
import * as movieData from './services/MockMovieData';

class App extends Component {

  getMovies(data) {
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

    const movies = this.getMovies(data);
    console.log(movies);

    const movieCards = movies.map((movie) =>
      // <img key="{movie.img}" src="{movie.img}" />
      <div>        
        <h6>{movie.title}</h6>
        <ContentCard key="{movie.img}" 
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
