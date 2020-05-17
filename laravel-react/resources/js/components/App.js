import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./subdirect/Main";
import LogIn from "./../log-in/LogIn";
import Student from "./student/Student";
import Register from "./../log-in/component/Register";
import { useSelector } from "react-redux";

function App() {
    const isAuthenticated = useSelector(state => state.redirect);

    const PrivateRoute = ({ children, ...rest }) => {
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    isAuthenticated ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        );
    };

    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/login" />

                <Route path="/login">
                    <LogIn />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>

                <PrivateRoute path="/admin">
                    <Main />
                </PrivateRoute>
                <PrivateRoute path="/student">
                    <Student />
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

export default App;

// if (document.getElementById('root')) {
//     ReactDOM.render(<App />, document.getElementById('root'));
// }
