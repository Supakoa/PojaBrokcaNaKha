import React, {Component} from 'react';
import ReactDOM from 'react-dom';
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
            <section>
                {this.checkRoleUser(this.state.role[0])}
            </section>
        );
    }
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
