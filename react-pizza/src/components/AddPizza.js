import React from "react";
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {getToppings, getPizzas, savePizza} from "../actions";

class AddPizza extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {
            name: '',
            toppings: []
        }
    }

    componentDidMount(){
        this.props.getToppings();
        this.props.getPizzas();
    }
    
    changeName= (e) => {
        this.setState({
            name: e.target.value
        })
    }

    validate = (e) => {
        e.preventDefault();
        if(this.state.name.trim().length == 0)
            alert("El nombre no puede estar vacío")
        
        this.props.savePizza(this.state.name, this.state.toppings);
    }

    addTopping = (topping) => {
        this.setState({
            toppings: [...this.state.toppings, topping]
        });
    }

    renderToppings = () => {
        return this.state.toppings.map((item) => { 
          return (
                <span key={`tname-${item.ToppingID}`} className="list-group-item d-flex justify-content-between align-items-center">
                    {item.Name}
                </span>
          );
        });
    }

    toAddList = () => {
        return this.props.toppings.map((item) => { 
          return (
                <li key={`topping-${item.ToppingID}`} className="list-group-item d-flex justify-content-between align-items-center">
                    {item.Name}
                    <button  type="button" 
                             className="btn btn-primary"  
                             onClick={() => this.addTopping(item)}>
                                 Add
                    </button>
                </li>
          );
        });
    }

    render() {
        return(
            <div className="container">
                <h2>New Pizza</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" placeholder="Enter name" onChange={this.changeName} value={this.state.name}/>
                    </div>
                    <div>
                        <h3>Toppings</h3>
                        {this.toAddList()}
                    </div>
                    <h3>Toppings to be added </h3>
                    <ul>
                        {this.renderToppings()}
                    </ul>
                    <button type="submit" className="btn btn-success" onClick={this.validate}>Save!</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps  = (state) => {
    return {
        toppings: state.toppingsReducer,
        pizzas: state.pizzasReducer
    };
}

export default connect(mapStateToProps, {getToppings, getPizzas, savePizza}) (AddPizza);