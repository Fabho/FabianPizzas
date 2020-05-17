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
import Home from './Home';

export default function App() {
    return (
        <Router>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/pizzas">Pizzas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/toppings">Toppings</Link>
                </li>
            </ul>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}>
                        <Home />
                    </Route>
                    <Route path="/pizzas" component={Pizzas}>
                        <Pizzas />
                    </Route>
                    <Route path="/toppings" component={Toppings}>
                        <Toppings />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}