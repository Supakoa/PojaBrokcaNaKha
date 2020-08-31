import React from "react";
import { Card } from "react-bootstrap";
import StatusBadgeDoc from "../../../../student/components/tableReport/statusDocument";

const ListDetailApprovers = ({ translate, approver }) => {
    console.log(approver);
    return (
        <Card>
            <Card.Body>
                <h5 className="pb-3">
                    <i className="fas fa-history"></i>{" "}
                    {translate("approvers.show-detail.user.title")}
                </h5>
                <dl className="row mb-0">
                    <dt className="col-lg-2 col-md-2 col-sm-3 pr-0">
                        {translate("approvers.show-detail.user.fullname")}:
                    </dt>
                    <dd className="col-lg-4 col-md-4 col-sm-9 px-0">
                        {`${approver.title} ${approver.first_name} ${approver.last_name}`}
                    </dd>
                </dl>
                <dl className="row mb-0">
                    <dt className="col-lg-2 col-md-2 col-sm-3 pr-0">
                        state previous:
                    </dt>
                    <dd className="col-lg-8 col-md-8 col-sm-9 px-0">
                        <StatusBadgeDoc status={approver.pivot.status} />
                    </dd>
                </dl>
            </Card.Body>
        </Card>
    );
};

export default ListDetailApprovers;
