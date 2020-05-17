export default (state = [], action) => {

    switch(action.type) {
        case 'GET_PIZZAS':
            return action.payload;
        default:
            return state;
    }
  }
  