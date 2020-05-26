import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AuthUser from "../middleware/axios/User";
import Home from "./contents/Home";
import Report from "./contents/Report";
import User from "./contents/User";
import News from "./contents/News";
import StepReport from "./contents/Stepreport";
import Header from "./navfolder/Header";
import Left from "./navfolder/Left";
import { Row, Col } from "react-bootstrap";
import Footer from "./footer/Footer";
import "./Appstyle.css";
import InBox from "./contents/messages/InBox";
import OutBox from "./contents/messages/OutBox";
import { useDispatch } from "react-redux";
import { user, isAuththen } from "../../redux/actions";

export default function Main() {
    const dispatch = useDispatch();
    const [_info, setInfo] = React.useState({});
    let { path, url } = useRouteMatch();
    const fetchUser = async _token => {
        const _item = await AuthUser(_token);
        dispatch(isAuththen(true));
        dispatch(user({ _item }));
        setInfo({
            ..._info,
            first: _item.first_name,
            last: _item.last_name
        });
    };
    React.useEffect(() => {
        const _authToken = localStorage._authLocal;
        const myAbortController = new AbortController();
        fetchUser(_authToken, {
            signal: myAbortController.signal
        });

        return () => {
            myAbortController.abort();
        };
    }, []);

    return (
        <section className="content-body">
            <Row className="app">
                <Col xs={12} sm={12} md={12} lg={2} className="pr-0 bg-info">
                    <Left url={url} />
                </Col>
                <Col xs={12} sm={12} md={12} lg={10} className="p-0">
                    <Header path={url} info={_info} />
                    <div className="container-fluid p-4">
                        <Switch>
                            <Route exact path={`${path}`}>
                                <Home />
                            </Route>
                            <Route path={`${path}/inbox`}>
                                <InBox />
                            </Route>
                            <Route path={`${path}/outbox`}>
                                <OutBox />
                            </Route>
                            <Route path={`${path}/report`}>
                                <Report />
                            </Route>
                            <Route path={`${path}/user`}>
                                <User />
                            </Route>
                            <Route path={`${path}/news`}>
                                <News />
                            </Route>
                            <Route path={`${path}/step-report`}>
                                <StepReport />
                            </Route>
                        </Switch>
                    </div>
                </Col>
            </Row>
            <Footer />
        </section>
    );
}
