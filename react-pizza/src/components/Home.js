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
        
    }

    render(){
        
            return <h2>Homea</h2>;
        
    }
} 

export default Home;