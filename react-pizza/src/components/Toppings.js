import React from "react";
import axios from "axios";
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {getToppings} from "../actions";

class Toppings extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getToppings();
        console.log(this.props)
    }

    renderList = () => {
        return this.props.toppings.map((item) => { 
          return (
                <li key={`topping-${item.ToppingID}`} className="list-group-item d-flex justify-content-between align-items-center">
                    {item.Name}
                    <button type="button" className="btn btn-primary">Details</button>
                </li>
          );
        });
    }

    render() {
        return(
            <div className="container">
                <h2>List of Toppings</h2>
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps  = (state) => {
    return {toppings: state.toppingsReducer};
}

export default connect(mapStateToProps, {getToppings}) (Toppings);