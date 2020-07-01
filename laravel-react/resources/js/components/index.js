import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "sweetalert2/src/sweetalert2.scss";
import AdminPage from "./AdminPage";
import SignIn from "./auth/sign-in";
import Student from "./student";
import SignUp from "./auth/sign-up";
import { useSelector } from "react-redux";
import NoMatch from "./NotMatch404";

function App() {
    const isAuthenticated = useSelector(state => state.redirectState);

    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <SignIn />
                </Route>
                <Route path="/register">
                    <SignUp />
                </Route>
                <PrivateRoute path="/admin">
                    <AdminPage />
                </PrivateRoute>
                <PrivateRoute path="/student">
                    <Student />
                </PrivateRoute>
                <Route path="/">
                    <Redirect
                        to={
                            !isAuthenticated
                                ? "/login"
                                : { state: { from: location } }
                        }
                    />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
}

function PrivateRoute({ children, ...rest }) {
    const isAuthenticated = useSelector(state => state.redirectState);
    let _isAuthLocal = localStorage.getItem("_authLocal");

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated || _isAuthLocal ? (
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
}

export default App;
