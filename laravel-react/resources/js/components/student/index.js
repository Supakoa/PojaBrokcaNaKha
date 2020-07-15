import React from "react";
import {
    Switch,
    Route,
    useRouteMatch,
    Link,
    useLocation, useHistory
} from "react-router-dom";
import { Row, Col, ListGroup } from "react-bootstrap";
import NavHeader from "./components/header";
import News from "./components/news";
import Profile from "./components/Profile";
import ReportTable from "./components/tableReport";
import ReportForm from "./components/fromReport";
import { ProfileContext } from "./context";
import { useDispatch } from "react-redux";
import { studentProfile } from "../../redux/actions";
import headerConfig from "../middleware/headerConfig";
import { _urlUser } from "../middleware/apis";
import  {_propsAuth} from "../middleware/props-auth";
import AuthUser from "../middleware/axios/User";
export default function Student() {
    const _dispatch = useDispatch();
    let { path, url } = useRouteMatch();
    const [_active, setActive] = React.useState(false);
    const { pathname } = useLocation();
    const [_user, setUser] = React.useState({});
    const token = localStorage._authLocal;
    let _history = useHistory();
    const _props = {
        "token" : token,
        "dispatch" : _dispatch,
        "studentProfile" : studentProfile,
        "role" : 3,
        "history" : _history
    };


    const fetchUser = async _props => {
        await setUser(AuthUser(_props));
    };

    const activeMenu = _path => {
        if (_path === "/student") {
            setActive(false);
        } else if (_path === "/student/form-report") {
            setActive(true);
        }
    };

    React.useEffect(() => {
        const abt = new AbortController();

        fetchUser(_propsAuth(_props), { signal: abt.signal });
        activeMenu(pathname);

        return () => {
            abt.abort();
        };
    }, [pathname, _active, _dispatch]);

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
                                    !_active ? `active` : ""
                                } list-group-item list-group-item-action border-left-0 border-right-0 border-top-0`}
                                to={`${url}`}
                            >
                                ตารางฟอร์ม
                            </Link>
                            <Link
                                className={`${
                                    _active ? `active` : ""
                                } list-group-item list-group-item-action border-left-0 border-right-0 border-top-0`}
                                to={`${url}/form-report`}
                            >
                                แบบฟอร์ม
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
