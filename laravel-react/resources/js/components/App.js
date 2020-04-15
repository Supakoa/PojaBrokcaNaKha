import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './subdirect/navfolder/Nav';
import Manubar from './subdirect/navfolder/Manubar';
import Footer from './subdirect/footer/Footer';
import './Appstyle.css';
import Home from './subdirect/contents/Home';
import User from './subdirect/contents/User';
import Step from './subdirect/contents/Step';

function App() {
    return (
        <div className="app">
            <Router>
                <NavBar />
                <section className="content-body">
                    <Manubar />
                    <div className="container-fluid">
                        <Switch >
                            <Route exact path="/" component={Home} />
                            <Route  path="/user" component={User} />
                            <Route  path="/step" component={Step} />
                        </Switch>
                    </div>
                </section>
                <Footer />
            </Router>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
