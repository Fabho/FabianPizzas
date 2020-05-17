import axios from 'axios';

export const getToppings = () => async dispatch => {

  const response = await axios.get(`http://localhost:63764/api/Toppings`);
  let toppings = [];

  if(response.status == 200){
    toppings =  response.data;
  }

  dispatch({ type: 'GET_TOPPINGS', payload: toppings});
};
