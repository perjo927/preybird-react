import React, { Component } from 'react';
import GridView from './components/GridView';
import ContentCard from './components/ContentCard';
import logo from './assets/logo.svg';
import './App.css';

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
            List of movies

            <GridView>
              <ContentCard>                
              </ContentCard>
            </GridView>

          </main>
          
        <footer></footer>
      </div>
    );
  }
}

export default App;
