import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './subdirect/Main';
import LogIn from "../log-in/LogIn";


class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            role:['admin', 'staff', 'student', 'log-in']
        }
        this.checkRoleUser = this.checkRoleUser.bind(this);
    }

    checkRoleUser(role){
        switch(role){
            case 'admin':
                return <Main />
                break;
            case 'staff':
                console.log('staff')
                break;
            case 'student':
                console.log('student')
                break;
            default:
                return <LogIn/>
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    {/*<Route/>*/}
                    {/*<Route/>*/}
                    <Route path="/log-in" component={LogIn}/>
                </Switch>
            </Router>
        );
    }
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
