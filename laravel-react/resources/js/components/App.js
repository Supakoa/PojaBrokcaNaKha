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
        if (role === 'admin'){
            return  <Main />
        }else if(role === 'staff'){
            console.log('staff')
        }else if(role === 'student'){
            console.log('student')
        }else {
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
