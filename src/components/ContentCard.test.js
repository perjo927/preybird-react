import ContentCard from './ContentCard';
import './ContentCard.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

describe('As a developer I want my ContentCard component to show an image in various sizes', () => {

  describe('Given that there is a container for the ContentCard component', () => {
    const div = document.createElement('div');


 describe('When it renders without child components', () => {
      shallow(<ContentCard></ContentCard>);

      test('Then the GridView must not crash', () => {
      });
    });


    describe('When it renders with props', () => {
      const card = shallow(<ContentCard srcS={'imgS'} srcL={'imgL'} title={'title'}></ContentCard>);

      test('Then the props must be set', () => {
        expect(card.props().children.props.src).toEqual('imgS');          
      });
    });
  });
});