import React from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

class Home extends React.Component{
    componentDidMount() {
        axios.get('http://localhost:63764/api/Toppings')
            .then(function (response) {
                // handle success
                console.log("bien")
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log("mal")
                console.log(error)
            });
    }

    render(){
        
            return <h2>Homea</h2>;
        
    }
} 

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}