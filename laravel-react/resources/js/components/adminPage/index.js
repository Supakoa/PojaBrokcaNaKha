import React from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {Route, Switch, useHistory, useRouteMatch} from "react-router-dom";
import "./Appstyle.css";
import {user, isAuththen, pathRoleUser} from "../../redux/actions";
import AuthUser from "../middleware/axios/User";
import StepReport from "./stepReport";
import HeaderNav from "./navfolder/headerNav";
import SideNav from "./navfolder/sideNav";
import {_propsAuth} from "../middleware/props-auth";
// import Footer from "./footer";
import Home from "./home";
import Report from "./report";
import User from "./user";
import News from "./news";
import Messagws from "./message";
import { useSelector } from "react-redux";
import {useTranslation} from 'react-i18next';

export default function AdminPage() {
    const {t} = useTranslation('', {useSuspense: false});
    const dispatch = useDispatch();
    const [_info, setInfo] = React.useState({});
    let { path, url } = useRouteMatch();
    let _history = useHistory();
    const token = localStorage._authLocal;

    const _props = {
        "dispatch": dispatch,
        "isAuththen": isAuththen,
        "pathRoleUser": pathRoleUser,
        "history": _history,
        "token": token,
        "user" :user,
        "info" : _info,
        "setInfo" : setInfo,
        "role" : 1
    };


    const fetchUser = async _props => {
        const _item = await AuthUser(_props);
        _props.setInfo({
            ..._props.info,
            first: _item.first_name,
            last: _item.last_name
        });
    };
    React.useEffect(() => {
        const myAbortController = new AbortController();
        fetchUser(_propsAuth(_props), {
            signal: myAbortController.signal
        });

        return () => {
            myAbortController.abort();
        };
    }, []);

    return (
        <Row className="app w-100">
            <Col md={1} lg={2} className="bg-secondary pr-0">
                <SideNav url={url} />
            </Col>
            <Col md={11} lg={10} className="p-0 w-100">
                <HeaderNav path={url} info={_info} />
                <div className="container-fluid p-4">
                    <Switch>
                        <Route exact path={`${path}`}>
                            <Home />
                        </Route>
                        <Route path={`${path}/inbox`}>
                            <Messagws t={t}/>
                        </Route>
                        <Route path={`${path}/report`}>
                            <Report />
                        </Route>
                        <Route path={`${path}/user`}>
                            <User t={t} />
                        </Route>
                        <Route path={`${path}/news`}>
                            <News t={t} />
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
