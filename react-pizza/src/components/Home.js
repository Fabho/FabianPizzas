import React from "react";
import profilePic from '../img/fgg.JPG';
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
    }

    render(){
        return (
        <div className="container">    
            <section className="page-section bg-dark">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-white mt-0">Pizzas demo App by Fabian Calsina</h2>
                            <hr className="divider light my-4" />
                            <p className="text-white-50 mb-4"><strong>Back end:</strong>.Net webapi2, Entity Framework usingMSSQLLocalDB</p>
                            <p className="text-white-50 mb-4"><strong>Front end:</strong>React, redux, redux-thunk, bootstrap 4.0</p>                            
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section">
                <div className="container">
                    <h2 className="text-center mt-0">At Your Service</h2>
                    <div className="text-center"> 
                        <img src={profilePic} width="300"/>
                    </div>
                    <hr className="divider my-4" />
                    <div className="row">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                                <h3 className="h4 mb-2">Email</h3>
                                <p className="text-muted mb-0">fabian.calsina@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                                <h3 className="h4 mb-2">Cellphone</h3>
                                <p className="text-muted mb-0">591 70534341</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                                <h3 className="h4 mb-2">Github Profile</h3>
                                <a href="https://github.com/Fabho" target="_blank">Fabho profile</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                                <h3 className="h4 mb-2">Made with Love</h3>
                                <p className="text-muted mb-0">2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
} 

export default Home;