import GridView from './GridView';
import './GridView.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

describe('As a developer I want my Gridview component to render child components through props', () => {

  describe('Given that there is a container for the GridView component', () => {
    const div = document.createElement('div');


 describe('When it renders without child components', () => {
      shallow(<GridView></GridView>);

      test('Then the GridView must not crash', () => {
      });
    });


    describe('When it renders with child components', () => {      
      const grid = shallow(<GridView><div></div></GridView>);

      test('And the props.children must equal <div></div>', () => {
          expect(grid.props().children.type).toEqual('div');          
      });
    });
  });
});