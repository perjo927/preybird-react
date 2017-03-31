import React, { Component } from 'react';
import GridView from './components/GridView';
import ContentCard from './components/ContentCard';
import logo from './assets/logo.svg';
import './App.css';

// TODO: Mock api data and import from movie-list-service
// import MovieData from './services/MockMovieData';

class App extends Component {

  render() {

    const movies = [
      { "img": "http://placehold.it/350x150" },
      { "img": "http://placehold.it/350x150" },
      { "img": "http://placehold.it/350x150" },
      { "img": "http://placehold.it/350x150" },
      { "img": "http://placehold.it/350x150" },
      { "img": "http://placehold.it/350x150" },
    ];

    const movieCards = movies.map((movie) =>
      <ContentCard img="{movie.img}"></ContentCard>      
    );

    return (
      <div className="App">
        <header>
          {/* TODO: Logo component */}
          <object type="image/svg+xml" data={logo} className="logo">
          </object>
          <h1>perplay</h1>
        </header>

        <main>
          <GridView>
            {movieCards}
          </GridView>
        </main>

        <footer></footer>
      </div>
    );
  }
}

export default App;
