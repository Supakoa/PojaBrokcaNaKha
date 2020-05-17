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
import Temp from "./subdirect/contents/Temp";
import Register from "./../log-in/component/Register";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            role: ["admin", "staff", "student", "log-in"],
        };

    }


    render() {
        return (
            <Router>
                {/* <Temp /> */}
                <Switch>
                    <Redirect exact from="/" to="/login" />
                    <Route path="/admin" component={Main} />
                    <Route path="/student" component={Student} />
                    {/*<Route/>*/}

                    <Route path="/login">
                        <LogIn  />
                    </Route>
                    <Route path="/register">
                        <Register  />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;

// if (document.getElementById('root')) {
//     ReactDOM.render(<App />, document.getElementById('root'));
// }
