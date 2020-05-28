
import pizzasReducer from '../reducers/pizzasReducer';

describe('empty state', () => {
    test('should return empty array', () => {
      const action = { type: 'GET_PIZZAS', payload: [] };
      const initialState = [];
      
      let state = pizzasReducer(undefined, action)
      expect(state).toEqual(initialState);
    });
});

describe('Pizzas in state', () => {
    test('should return pizzas in state', () => {
      const action = { type: 'GET_PIZZAS', payload: [{'PizzaID': 1 ,'Name': 'Test pizza'}] };
      const initialState = [{'PizzaID': 1 ,'Name': 'Test pizza'}];
      
      let state = pizzasReducer(undefined, action)
      expect(state).toEqual(initialState);
    });
});