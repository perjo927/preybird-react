import App from './App';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

describe('As a developer I want my App component to contain a Gridview with ContentCards populated with data', () => {

  describe('Given that there is a container for the App component', () => {
    const div = document.createElement('div');


 describe('When it renders without child components', () => {
      shallow(<App />);

      test('Then the App must not crash', () => {
      });
    });

    describe('When it renders with child components', () => {
      // ReactDOM.render(<App />, div);

      test('Then the App must not crash', () => {
      });
    });
  });
});