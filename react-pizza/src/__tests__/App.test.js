import React from 'react';
import App from '../components/App';
import { create } from 'react-test-renderer'

describe('Pizzas app Test',()=>{
    test('should render app component', () => {
    let tree = create(<App />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})