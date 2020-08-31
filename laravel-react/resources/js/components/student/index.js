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
import {
    user,
    documentsTemplate,
    subjectsForDocument,
    userDocument
} from "../../redux/actions";
import { _propsAuth } from "../middleware/props-auth";
import MessageElements from "./components/message";
import post2Documents from "../middleware/post2Redux/postToDocuments";
import post2Subjects from "../middleware/post2Redux/postToSubjects";
import post2User from "../middleware/post2Redux/postToUser";
import post2UserDocuments from "../middleware/post2Redux/postToUserDocuments";
import { useTranslation } from "react-i18next";

export default function Student() {
    let { path, url } = useRouteMatch();
    let _history = useHistory();
    const { t } = useTranslation();
    const { pathname } = useLocation();
    const _dispatch = useDispatch();
    const token = localStorage._authLocal;
    const abort = new AbortController();
    const _user = useSelector(state => state.userState);

    const _props = {
        token: token,
        role: 3,
        history: _history,
        id: _user.id,
        dispatch: _dispatch,
        acDocTemp: documentsTemplate,
        acSubject: subjectsForDocument,
        acUserDocs: userDocument,
        acUser: user
    };

    React.useEffect(() => {
        if (Object.keys(_user).length === 0 && token) {
            post2User(_props, { signal: abort.signal });
        } else if (_user.id && token) {
            post2Documents(_props, {
                signal: abort.signal
            });
            post2Subjects(_props, { signal: abort.signal });
            post2UserDocuments(_props, { signal: abort.signal });
        }
    }, [token, _user.id]);

    React.useEffect(() => {
        return () => {
            abort.abort();
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
                            <h6 className="py-2 px-2 text-secondary">
                                <i className="fas fa-th-list"></i>{" "}
                                {t("students.nav-left.title")}
                            </h6>
                            <Link
                                className={`${
                                    pathname === `/student` ? `active` : ""
                                } list-group-item list-group-item-action border-left-0 border-right-0 border-top-0 text-truncate`}
                                to={`${url}`}
                            >
                                {t("students.nav-left.history")}
                            </Link>
                            <Link
                                className={`${
                                    pathname === "/student/form-report"
                                        ? `active`
                                        : ""
                                } list-group-item list-group-item-action border-left-0 border-right-0 border-top-0`}
                                to={`${url}/form-report`}
                            >
                                {t("students.nav-left.form")}
                            </Link>
                        </ListGroup>
                    </Col>
                    <Col md={9} lg={9}>
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
            <MessageElements token={token} />
        </div>
    );
}
