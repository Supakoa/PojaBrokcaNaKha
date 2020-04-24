import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./contents/Home";
import Message from "./contents/Message";
import Report from "./contents/Report";
import User from "./contents/User";
import News from "./contents/News";
import StepReport from "./contents/Stepreport";
import Header from "./navfolder/Header";

export default class Main extends Component{
    render(){
        return(
            <section className="content-body">
                <Header />
                <div className="container-fluid p-4">
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
        );
    }
}

