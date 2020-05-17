import React from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Pizzas from './Pizzas';
import Toppings from './Toppings';

class Home extends React.Component{
    componentDidMount() {
        console.log(Pizzas)
        /*axios.get('http://localhost:63764/api/Toppings')
            .then(function (response) {
                // handle success
                console.log("bien")
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log("mal")
                console.log(error)
            });*/
    }

    render(){
        
            return <h2>Homea</h2>;
        
    }
} 

export default Home;