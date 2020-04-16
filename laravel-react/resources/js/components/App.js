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
import StepReport from './subdirect/contents/Stepreport';
import Message from './subdirect/contents/Message';
import News from './subdirect/contents/News';
import Report from './subdirect/contents/Report';

function App() {
    return (

            <Router>
                <div className="app">
                    <Manubar />
                    <section className="content-body">
                        <NavBar />
                        <div className="container-fluid">
                            <Switch >
                                <Route exact path="/" component={Home} />
                                <Route path="/message" component={Message} />
                                <Route path="/report" component={Report} />
                                <Route path="/user" component={User} />
                                <Route path="/news" component={News} />
                                <Route path="/stepreport" component={StepReport} />
                            </Switch>
                        </div>
                    </section>
                </div>
                <Footer />
            </Router>

    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
