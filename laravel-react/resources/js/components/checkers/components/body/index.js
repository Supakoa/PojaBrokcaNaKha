import React from "react";
import { Container } from "react-bootstrap";
import TableChecker from "./tableChecker";
import { Switch, useRouteMatch, Route } from "react-router-dom";

export default function BodyChecker() {
    const { path, url } = useRouteMatch();
    return (
        <Container className="py-3">
            <TableChecker urlChecker={url} />
            <Switch>
                <Route path={`${path}/show/:id`}>show Document</Route>
            </Switch>
        </Container>
    );
}
