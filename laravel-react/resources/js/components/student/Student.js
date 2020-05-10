import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from "./components/Main";
import Profile from "./components/Profile";


export default class Student extends Component {
    render() {
        return (
            <section>
                <Header/>
                <section className="app">
                    <Container>
                        <Router>
                            <Switch>
                                <Route path="/student/index" >
                                    <Main/>
                                </Route>
                                <Route path="/student/profile">
                                    <Profile/>
                                </Route>
                            </Switch>
                        </Router>
                    </Container>
                </section>
                <Footer/>
            </section>
        );
    }
}
