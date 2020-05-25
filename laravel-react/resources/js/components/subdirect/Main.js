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
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./footer/Footer";
import "./Appstyle.css";
import InBox from "./contents/messages/InBox";
import OutBox from "./contents/messages/OutBox";
import { useDispatch } from "react-redux";
import { user } from "../../redux/actions";

export default function Main() {
    const dispatch = useDispatch();
    const [_info, setInfo] = React.useState({});
    let { path, url } = useRouteMatch();
    const fetchUser = async _token => {
        const item = await AuthUser(_token);
        dispatch(user({ item }));
        setInfo({
            ..._info,
            first: item.first_name,
            last: item.last_name
        });
    };
    React.useEffect(() => {
        const _authToken = localStorage._authLocal;
        const myAbortController = new AbortController();
        fetchUser(_authToken, { signal: myAbortController.signal });
        return () => {
            myAbortController.abort();
        };
    }, [_info]);

    return (
        <section className="content-body">
            <Row className="app">
                <Col xs={12} sm={12} md={2} lg={2} className=" pr-0 bg-info">
                    <Left path={url} />
                </Col>
                <Col xs={12} sm={12} md={10} lg={10} className="p-0">
                    <Header path={url} info={_info} />
                    <div className="container-fluid p-4">
                        <Switch>
                            <Route exact path={`${path}`} component={Home} />
                            <Route path={`${path}/inbox`} component={InBox} />
                            <Route path={`${path}/outbox`} component={OutBox} />
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
