import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./contents/Home";
import Report from "./contents/Report";
import User from "./contents/User";
import News from "./contents/News";
import StepReport from "./contents/Stepreport";
import Header from "./navfolder/Header";
import Left from "./navfolder/Left";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./footer/Footer";
import './Appstyle.css';
import InBox from "./contents/messages/InBox";
import OutBox from "./contents/messages/OutBox";

export default class Main extends Component{
    render(){
        return(
            <section className="content-body">
                <Router>
                    <Row className="app">
                        <Col xs={12} sm={12} md={2} lg={2} className=" pr-0 bg-info">
                            <Left/>
                        </Col>
                        <Col xs={12} sm={12} md={10} lg={10} className="p-0">
                            <Header />
                            <div className="container-fluid p-4">
                                <Switch >
                                    <Route path="/" component={Home} />
                                    <Route path="/message/inbox" component={InBox} />
                                    <Route path="/message/outbox" component={OutBox} />
                                    <Route path="/report" component={Report} />
                                    <Route path="/user" component={User} />
                                    <Route path="/news" component={News} />
                                    <Route path="/stepReport" component={StepReport} />
                                </Switch>
                            </div>
                        </Col>
                    </Row>
                    <Footer />
                </Router>
            </section>
        );
    }
}

