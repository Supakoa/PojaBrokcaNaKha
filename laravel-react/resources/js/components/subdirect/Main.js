import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
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
import "./Appstyle.css";
import InBox from "./contents/messages/InBox";
import OutBox from "./contents/messages/OutBox";
import { useSelector, useDispatch } from "react-redux";

// Create Context User Authentication
// export const userAuthContext = React.createContext({});

export default function Main() {
    const getUser = useSelector(state => state.userState);
    const dispatch = useDispatch();

    React.useEffect(() => {
        // dispatch()
    });

    const showHeader = {
        title: getUser.title,
        firstName: getUser.first_name,
        lastName: getUser.last_name
    };

    let { path, url } = useRouteMatch();

    return (
        <section className="content-body">
            <Row className="app">
                <Col xs={12} sm={12} md={2} lg={2} className=" pr-0 bg-info">
                    <Left path={url} />
                </Col>
                <Col xs={12} sm={12} md={10} lg={10} className="p-0">
                    <Header path={url} user={showHeader} />
                    <div className="container-fluid p-4">
                        <Switch>
                            <Route exact path={`${path}`} component={Home} />
                            <Route
                                path={`${path}/message-inbox`}
                                component={InBox}
                            />
                            <Route
                                path={`${path}/message-outbox`}
                                component={OutBox}
                            />
                            <Route path={`${path}/report`} component={Report} />
                            <Route path={`${path}/user`} component={User} />
                            <Route path={`${path}/news`} component={News} />
                            <Route
                                path={`${path}/stepReport`}
                                component={StepReport}
                            />
                        </Switch>
                    </div>
                </Col>
            </Row>
            <Footer />
        </section>
    );
}
