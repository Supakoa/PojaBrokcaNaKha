import React from "react";
import {
    Switch,
    Route,
    useRouteMatch,
    Link,
    useLocation,
    useHistory
} from "react-router-dom";
import { Row, Col, ListGroup } from "react-bootstrap";
import NavHeader from "./components/header";
import News from "./components/news";
import Profile from "./components/Profile";
import ReportTable from "./components/tableReport";
import ReportForm from "./components/fromReport";
import { ProfileContext } from "./context";
import { useDispatch, useSelector } from "react-redux";
import { user, documentsTemplate } from "../../redux/actions";
import { _propsAuth } from "../middleware/props-auth";
import fetchDocuments from '../middleware/axios/fetchDocuments'
import AuthUser from "../middleware/axios/User";

export default function Student() {
    const _dispatch = useDispatch();
    let { path, url } = useRouteMatch();
    const { pathname } = useLocation();
    const token = localStorage._authLocal;
    const abt = new AbortController();
    const _docTemp = useSelector(state => state.documentsTemplate);
    const _user = useSelector(state => state.userState);

    let _history = useHistory();

    const _props = {
        token: token,
        role: 3,
        history: _history,
        userId: _user.id
    };

    const post2Documents = async () => {
        const _tempDocs = await fetchDocuments(token);
        if (_tempDocs) {
            _dispatch(documentsTemplate(_tempDocs));
        }
    };

    React.useEffect(() => {
        if (_docTemp.length === 0) {
            post2Documents({
                signal: abt.signal
            });
        }
    }, [_docTemp]);

    const _authUser = async _props => {
        const _user = await AuthUser(_props);
        if (_user) {
            _dispatch(user(_user));
        }
    };

    React.useEffect(() => {
        if (Object.keys(_user).length === 0 && token) {
            _authUser(_props, { signal: abt.signal });
        }
    }, [_user]);

    React.useEffect(() => {
        return () => {
            abt.abort();
        };
    }, []);

    return (
        <div className="mb-3">
            <News />
            <ProfileContext.Provider value={_user}>
                <NavHeader url={url} />
                <Row className="w-100 container-fluid">
                    <Col md={3} lg={3}>
                        <ListGroup className="border-0">
                            <h6 className="py-2 px-2 text-secondary">เมนู</h6>
                            <Link
                                className={`${
                                    pathname === `/student` ? `active` : ""
                                } list-group-item list-group-item-action border-left-0 border-right-0 border-top-0`}
                                to={`${url}`}
                            >
                                ประวัติการส่งคำร้อง
                            </Link>
                            <Link
                                className={`${
                                    pathname === "/student/form-report"
                                        ? `active`
                                        : ""
                                } list-group-item list-group-item-action border-left-0 border-right-0 border-top-0`}
                                to={`${url}/form-report`}
                            >
                                ส่งคำร้อง
                            </Link>
                        </ListGroup>
                    </Col>
                    <Col md={9} lg={9} style={{ minHeight: "80vh" }}>
                        <div className="mt-2">
                            <Switch>
                                <Route
                                    path={`${path}/profile`}
                                    component={Profile}
                                />
                                <Route
                                    path={`${path}/form-report`}
                                    component={ReportForm}
                                />
                                <Route
                                    path={`${path}`}
                                    component={ReportTable}
                                />
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </ProfileContext.Provider>
        </div>
    );
}
