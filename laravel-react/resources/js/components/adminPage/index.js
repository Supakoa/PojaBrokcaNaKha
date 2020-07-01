import React from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import "./Appstyle.css";
import { user, isAuththen } from "../../redux/actions";
import AuthUser from "../middleware/axios/User";
import StepReport from "./stepReport";
// import HeaderNav from "./navfolder/headerNav";
import SideNav from "./navfolder/sideNav";
// import Footer from "./footer";
import Home from "./home";
import Report from "./report";
import User from "./user";
import News from "./news";
import Messagws from "./message";

export default function AdminPage() {
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
        <Row className="app">
            <SideNav url={url} />
            <Col className="p-0">
                {/* <HeaderNav path={url} info={_info} /> */}
                <div className="container-fluid p-4">
                    <Switch>
                        <Route exact path={`${path}`}>
                            <Home />
                        </Route>
                        <Route path={`${path}/inbox`}>
                            <Messagws />
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
            {/* <Footer /> */}
        </Row>
    );
}
