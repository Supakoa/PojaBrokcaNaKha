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

export default function Student(props) {
    let { path, url } = useRouteMatch();
    const [_active, setActive] = React.useState(false);
    const { pathname } = useLocation();

    React.useEffect(() => {
        if (pathname !== "/student") {
            setActive(true);
        } else {
            setActive(false);
        }
    });

    return (
        <div className="mb-3">
            <News />
            <NavHeader url={url} user={props.user} />
            <Row className="w-100">
                <Col md={3} lg={3}>
                    <ListGroup className="border-0">
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
                            <Route path={`${path}`} component={ReportTable} />
                        </Switch>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
