import React, { Component } from "react";
import {
    Route,
    Switch,
    useRouteMatch
} from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Profile from "./components/Profile";

export default function Student(props) {
    let { path, url } = useRouteMatch();
    return (
        <section>
            <Header url={url} user={props.user} />
            <section className="app">
                <Container>
                    <Switch>
                        <Route exact path={`${path}`} component={Main} />
                        <Route path={`${path}/profile`} component={Profile} />
                    </Switch>
                </Container>
            </section>
            <Footer />
        </section>
    );
}
