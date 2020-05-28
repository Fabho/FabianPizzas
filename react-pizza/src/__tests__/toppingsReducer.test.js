
import toppingsReducer from '../reducers/toppingsReducer';

describe('empty state', () => {
    test('should return empty array', () => {
      const action = { type: 'GET_TOPPINGS', payload: [] };
      const initialState = [];
      
      let state = toppingsReducer(undefined, action)
      expect(state).toEqual(initialState);
    });
});

describe('toppings in state', () => {
    test('should return toppings in state', () => {
      const action = { type: 'GET_TOPPINGS', payload: [{'ToppingID': 1 ,'Name': 'Test topping'}] };
      const initialState = [{'ToppingID': 1 ,'Name': 'Test topping'}];
      
      let state = toppingsReducer(undefined, action)
      expect(state).toEqual(initialState);
    });
});