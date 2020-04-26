import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import Left from './subdirect/navfolder/Left';
import Footer from './subdirect/footer/Footer';
import './Appstyle.css';
import Main from './subdirect/Main';
import {Row, Col} from "react-bootstrap";


class App extends Component {
    render() {
        return (
            <Router>
                <Row className="app">
                    <Col xs={12} sm={12} md={2} lg={2} className="pt-5 pr-0 bg-secondary">
                        <Left/>
                    </Col>
                    <Col xs={12} sm={12} md={10} lg={10} className="p-0">
                        <Main />
                    </Col>
                </Row>
                <Footer />
            </Router>
        );
    }
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
