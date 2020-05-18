import React from "react";
import { connect } from 'react-redux';
import { Route , withRouter } from 'react-router-dom';

import {getToppings, deleteTopping} from "../actions";

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
                    <button  type="button" 
                             className="btn btn-danger"  
                             onClick={() => this.props.deleteTopping(item.ToppingID)}>
                                 Delete
                    </button>
                </li>
          );
        });
    }

    goToAddTopping= () =>{
        this.props.history.push('/addTopping')
    }

    render() {
        return(
            <div className="container">
                <h2>List of Toppings</h2>
                <button type="button" className="btn btn-light" onClick={this.goToAddTopping}>Add new Topping</button>
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

export default connect(mapStateToProps, {getToppings, deleteTopping}) (withRouter(Toppings));