import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import Left from './subdirect/navfolder/Left';
import Footer from './subdirect/footer/Footer';
import Main from './subdirect/Main';
import {Row, Col} from "react-bootstrap";


class App extends Component {
    render() {
        return (
            <section>
                <Router>
                    <Main />
                </Router>
            </section>
        );
    }
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
