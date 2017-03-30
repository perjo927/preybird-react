import React, { Component } from 'react';
import GridView from './components/GridView';
import ContentCard from './components/ContentCard';
import logo from './assets/logo.svg';
import './App.css';

// TODO: Mock api data and import from movie-list-service

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <object type="image/svg+xml" data={logo} className="logo">
          </object>
          <h1>perplay</h1>
        </header>

        <main>          
          <GridView>   
            <ContentCard img="http://placehold.it/350x150"></ContentCard>   
          </GridView>
        </main>

        <footer></footer>
      </div>
    );
  }
}

export default App;
