export default (state = [], action) => {

    switch(action.type) {
        case 'GET_TOPPINGS':
            return action.payload;
        default:
            return state;
    }
  }
  