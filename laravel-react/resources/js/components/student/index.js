import React from "react";
import {
    Switch,
    Route,
    useRouteMatch,
    Link,
    useLocation
} from "react-router-dom";
import { Row, Col, ListGroup } from "react-bootstrap";
import NavHeader from "./components/header";
import News from "./components/news";
import Profile from "./components/Profile";
import ReportTable from "./components/tableReport";
import ReportForm from "./components/fromReport";
import { ProfileContext } from "./context";

export default function Student(props) {
    let { path, url } = useRouteMatch();
    const [_active, setActive] = React.useState(false);
    const { pathname } = useLocation();
    const [_user, setUser] = React.useState({});

    const fetchUser = async () => {
        await axios
            .post(`http://localhost:8000/api/user`, localStorage._authLocal, {
                headers: {
                    Authorization: `Bearer ${localStorage._authLocal}`,
                    "Content-Type": "application/json",
                    "Retry-After": 3600
                }
            })
            .then(res => {
                const item = res.data.success;
                // console.log(item);
                setUser(item);
                // return item;
            });
    };

    React.useEffect(() => {
        const abt = new AbortController();
        fetchUser();
        if (pathname !== "/student") {
            setActive(true);
        } else {
            setActive(false);
        }
        return () => {
            abt.abort();
        };
    }, [pathname]);

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
