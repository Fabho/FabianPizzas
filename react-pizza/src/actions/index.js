import axios from 'axios';

export const getToppings = () => async dispatch => {

  const response = await axios.get(`http://localhost:63764/api/Toppings`);
  let toppings = [];

  if(response.status == 200){
    toppings =  response.data;
  }

  dispatch({ type: 'GET_TOPPINGS', payload: toppings});
};

export const deleteTopping = (toppingId) => async dispatch => {
    
    const response = await axios.delete(`http://localhost:63764/api/Toppings/${toppingId}`);
    window.location.reload();

};

export const saveTopping = (name, id) => async dispatch => {
    
    const response = await axios.post(`http://localhost:63764/api/Toppings`,{
        "ToppingID": id,
        "name": name
    });
    console.log(response)
    //window.location.reload();

};


export const deletePizza = (pizzaId) => async dispatch => {
    
    const response = await axios.delete(`http://localhost:63764/api/Pizzas/${pizzaId}`);
    window.location.reload();

};

export const getPizzas = () => async dispatch => {

    const response = await axios.get(`http://localhost:63764/api/Pizzas`);
    let pizzas = [];
  
    if(response.status == 200){
      pizzas =  response.data;
    }
  
    dispatch({ type: 'GET_PIZZAS', payload: pizzas});
};
  