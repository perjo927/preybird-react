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
          <span>preybirdplay</span>
        </div>
        <p className="App-intro">
          List of movies
        </p>
      </div>
    );
  }
}

export default App;
