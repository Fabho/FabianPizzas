import React from "react";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Pizzas from './Pizzas';
import Toppings from './Toppings';
import Home from './Home';
import AddTopping from './AddTopping';
import reducers from '../reducers';

const store = createStore(reducers, applyMiddleware(thunk));

export default function App() {
    return (
        <Provider store={store}>
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
                        <Route path="/addTopping" component={AddTopping}>
                            <AddTopping />
                        </Route>
                        <Route path="/toppings" component={Toppings}>
                            <Toppings />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}