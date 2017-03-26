import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <object type="image/svg+xml" data={logo} className="App-logo">
          </object>
          <h1>perplay</h1>
        </div>
          List of movies
      </div>
    );
  }
}

export default App;
