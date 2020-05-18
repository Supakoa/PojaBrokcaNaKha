import React, { useEffect } from "react";
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
    const isAuthenticated = useSelector(state => state.redirectState);
    const getRoleId = useSelector(state => state.userState);

    const PrivateRoute = ({ children, ...rest }) => {
        console.log(rest);

        return (
            <div>
                {!isAuthenticated ? (
                    <Route path={rest.location.pathname} component={children} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location.pathname }
                        }}
                    />
                )}
            </div>
        );
    };

    useEffect(() => {
        const _role_id = getRoleId.role_id;

        if (_role_id === 1) {
            location.pathname = "/admin";
            console.log("if ./App pathname " + location.pathname);
        } else {
            // console.log('else ./App role_id '+location.pathname);
        }
    });

    // console.log("isAuth "+ isAuthenticated);
    // console.log("location App "+ location);

    return (
        <Router>
            <Switch>
                {/* <Redirect exact from="/" to="/login" /> */}

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
