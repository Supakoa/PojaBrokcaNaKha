import React from "react";
import { Container } from "react-bootstrap";
import TableApprover from "./tableApprover";
import { Switch, useRouteMatch, Route } from "react-router-dom";

export default function BodyApprover() {
    const { path, url } = useRouteMatch();
    return (
        <Container className="py-3">
            <TableApprover urlApprover={url} />
            <Switch>
                <Route path={`${path}/show/:id`}>show Document</Route>
            </Switch>
        </Container>
    );
}
