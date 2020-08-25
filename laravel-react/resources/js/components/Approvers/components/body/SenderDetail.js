import React from "react";
import { useSelector } from "react-redux";
import findingSender from "../../../middleware/method/findingSender";
import { Card, Container, Spinner } from "react-bootstrap";

const SenderDetail = ({ id, translate }) => {
    const _allUsers = useSelector(s => s.allUsers);
    const [_user, setUser] = React.useState({});

    React.useEffect(() => {
        setUser(findingSender(id, _allUsers));
    });

    if (Object.keys(_user).length > 0) {
        return (
            <Card>
                <Card.Body>
                    <h5 className="pb-3">
                        <i className="fas fa-user-edit"></i>{" "}
                        {translate("approvers.show-detail.user.title")}
                    </h5>
                    <dl className="row mb-0">
                        <dt className="col-lg-2 col-md-2 col-sm-3 pr-0">
                            {translate("approvers.show-detail.user.fullname")}:
                        </dt>
                        <dd className="col-lg-5 col-md-5 col-sm-9 px-0">
                            {`${_user.title} ${_user.first_name} ${_user.last_name}`}
                        </dd>
                        <dt className="col-lg-2 col-md-2 col-sm-3 pr-0">
                            {translate("approvers.show-detail.user.studentId")}:
                        </dt>
                        <dd className="col-lg-3 col-md-3 col-sm-9 px-0">
                            {_user.student_id !== null ? _user.student_id : "-"}
                        </dd>
                    </dl>

                    <dl className="row">
                        <dt className="col-lg-2 col-md-2 col-sm-3 pr-0">
                            {translate("approvers.show-detail.user.faculty")}:
                        </dt>
                        <dd className="col-lg-10 col-md-10 col-sm-9 px-0">
                            {_user.major.faculty.name
                                ? _user.major.faculty.name
                                : "-"}
                        </dd>
                        <dt className="col-lg-2 col-md-2 col-sm-3 pr-0">
                            {translate("approvers.show-detail.user.major")}:
                        </dt>
                        <dd className="col-lg-10 col-md-10 col-sm-9 px-0">
                            {_user.major.name ? _user.major.name : "-"}
                        </dd>
                        <dt className="col-lg-2 col-md-2 col-sm-3 pr-0">
                            {translate(
                                "approvers.show-detail.user.phoneNumber"
                            )}
                            :
                        </dt>
                        <dd className="col-lg-10 col-md-10 col-sm-9 px-0">
                            {_user.telephone ? _user.telephone : "-"}
                        </dd>
                    </dl>
                </Card.Body>
            </Card>
        );
    } else {
        return (
            <Container
                style={{ minHeight: "100px" }}
                className="d-flex align-items-center justify-content-center"
            >
                <Spinner animation="border" />
            </Container>
        );
    }
};

export default SenderDetail;
