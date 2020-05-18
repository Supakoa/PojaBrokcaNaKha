import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    useHistory,
    useLocation,
    Link
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./subdirect/Main";
import LogIn from "./../log-in/LogIn";
import Student from "./student/Student";
import Register from "./../log-in/component/Register";
import { useSelector } from "react-redux";

function App() {
    // const dispatch = useDispatch();
    // const getRoleId = useSelector(state => state.userState);
    const isAuthenticated = useSelector(state => state.redirectState);

    console.log("isAuth " + isAuthenticated);
    console.log(location);

    return (
        <Router>
            <Switch>
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

    // console.log(rest);
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
}

function NoMatch() {
    let location = useLocation();
    // let history = useHistory();
    // let { from } = location.state || { from: { pathname: "/" } };
    // history.replace(from)
    return (
        <div
            className="container d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <h3>
                404 Not Found Page <Link to="/">{location.pathname}</Link>
            </h3>
        </div>
    );
}

export default App;

// if (document.getElementById('root')) {
//     ReactDOM.render(<App />, document.getElementById('root'));
// }
