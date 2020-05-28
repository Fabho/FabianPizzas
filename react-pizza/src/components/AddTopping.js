import React from "react";
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {getToppings, saveTopping} from "../actions";

class AddTopping extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {
            name: ''
        }
    }

    componentDidMount(){
        this.props.getToppings();
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
        
        this.props.saveTopping(this.state.name);
    }

    render() {
        return(
            <div className="container">
                <h2>New Topping</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" placeholder="Enter name" onChange={this.changeName} value={this.state.name}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.validate}>Save!</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps  = (state) => {
    return {toppings: state.pizzasReducer};
}

export default connect(mapStateToProps, {getToppings, saveTopping}) (AddTopping);