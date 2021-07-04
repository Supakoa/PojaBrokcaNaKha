import React from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import "./Appstyle.css";
import { user, isAuththen, pathRoleUser } from "../../redux/actions";
import StepReport from "./stepReport";
import HeaderNav from "./navfolder/headerNav";
import SideNav from "./navfolder/sideNav";
import { _propsAuth } from "../middleware/props-auth";
import Home from "./home";
import Report from "./report";
import User from "./user";
import News from "./news";
import Messages from "./message";
import Group from "./group";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import post2User from "../middleware/post2Redux/postToUser";

export default function AdminPage() {
    const { t } = useTranslation();
    const _user = useSelector(s => s.userState);
    const dispatch = useDispatch();
    let { path, url } = useRouteMatch();
    let _history = useHistory();
    const token = localStorage._authLocal;

    const _props = {
        dispatch: dispatch,
        isAuththen: isAuththen,
        pathRoleUser: pathRoleUser,
        history: _history,
        token: token,
        acUser: user,
        role: 1
    };

    React.useEffect(() => {
        const abort = new AbortController();

        if (Object.keys(_user).length === 0 && token) {
            post2User(_props, {
                signal: abort.signal
            });
        }
        return () => {
            abort.abort();
        };
    }, [_user, token]);

    return (
        <Row className="app w-100 m-0">
            <Col md={1} lg={2} className="bg-secondary px-0">
                <SideNav url={url} />
            </Col>
            <Col md={11} lg={10} className="p-0 w-100">
                <HeaderNav path={url} />
                <div className="container-fluid p-4">
                    <Switch>
                        <Route exact path={`${path}`}>
                            <Home />
                        </Route>
                        <Route path={`${path}/inbox`}>
                            <Messages t={t} />
                        </Route>
                        <Route path={`${path}/report`}>
                            <Report t={t} />
                        </Route>
                        <Route path={`${path}/user`}>
                            <User t={t} />
                        </Route>
                        <Route path={`${path}/news`}>
                            <News t={t} />
                        </Route>
                        <Route path={`${path}/group`}>
                            <Group />
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
