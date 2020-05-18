import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getPizzas, deletePizza} from "../actions";

class Pizzas extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getPizzas();
        console.log(this.props)
    }

    goToAddPizza= () =>{
        this.props.history.push('/addPizza')
    }
    
    renderList = () => {
        if(this.props.pizzas.length == 0) return <div>No Entries</div>;

        return this.props.pizzas.map((item) => { 
          return (
                <li key={`topping-${item.PizzaID}`} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        Name: {item.Name}
                    </div>
                    <div>
                        <strong>Toppings:  </strong> 
                        {
                            item.Toppings.map(t=>{
                                return <span key={t.ToppingID} className="badge badge-dark">{t.Name}  </span>;
                            })
                        }
                    </div>
                    <button  type="button" 
                             className="btn btn-danger"  
                             onClick={() => this.props.deletePizza(item.PizzaID)}>
                                 Delete
                    </button>
                </li>
          );
        });
    }

    render() {
        return(
            <div className="container">
                <h2>Pizzas!</h2>
                <button type="button" className="btn btn-light" onClick={this.goToAddPizza}>Add new Pizza</button>
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps  = (state) => {
    return {pizzas: state.pizzasReducer};
}

export default connect(mapStateToProps, {getPizzas, deletePizza}) (withRouter(Pizzas));