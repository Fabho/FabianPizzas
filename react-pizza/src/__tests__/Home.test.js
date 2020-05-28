import React from 'react';
import Home from '../components/Home';
import { create } from 'react-test-renderer'

describe('Pizzas home Test',()=>{
    test('should render Home component', () => {
    let tree = create(<Home />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})