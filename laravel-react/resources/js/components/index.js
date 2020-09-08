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
import clearLocalStorge from "./middleware/method/clearLocalStorage";
import Approvers from "./Approvers";
import { useTranslation } from "react-i18next";

function App() {
    let _isAuthLocal = localStorage.getItem("_authLocal");
    const { i18n } = useTranslation();
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect
                        to={!_isAuthLocal ? "/login" : clearLocalStorge()}
                    />
                </Route>
                <Route exact path="/login" component={SignIn} />
                <Route path="/register" component={SignUp} />
                <PrivateRoute path="/admin">
                    <AdminPage />
                </PrivateRoute>
                <PrivateRoute path="/student">
                    <Student />
                </PrivateRoute>
                <PrivateRoute path="/Approvers">
                    <Approvers />
                </PrivateRoute>

                <Route path="*" component={NoMatch} />
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
