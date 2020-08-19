import React from "react";
import { Container } from "react-bootstrap";
import TableApprover from "./tableApprover";
import { useSelector, useDispatch } from "react-redux";
import {
    documentsTemplate,
    subjectsForDocument,
    userDocument
} from "../../../../redux/actions";
import post2Subjects from "../../../middleware/post2Redux/postToSubjects";
import post2Documents from "../../../middleware/post2Redux/postToDocuments";
import post2UserDocuments from "../../../middleware/post2Redux/postToUserDocuments";

import { Switch, useRouteMatch, Route } from "react-router-dom";
import ShowDetail from "./ShowDetail";
import NoneDetail from "./NoneDetatil";
import FilterSort from "./FilterSort";

export default function BodyApprover() {
    const { path, url } = useRouteMatch();
    const _dispatch = useDispatch();
    const token = localStorage._authLocal;
    const _userId = useSelector(s => s.userState.id);

    const _props = {
        token: token,
        id: _userId,
        dispatch: _dispatch,
        acDocTemp: documentsTemplate,
        acSubject: subjectsForDocument,
        acUserDocs: userDocument
    };

    React.useEffect(() => {
        const abort = new AbortController();
        if (_userId && token) {
            post2UserDocuments(_props, { signal: abort.signal });
            post2Subjects(_props, { signal: abort.signal });
            post2Documents(_props, { signal: abort.signal });
        }
        return () => abort.abort();
    }, [_userId, token]);

    return (
        <Container className="py-3">
            <FilterSort />
            <TableApprover urlApprover={url} />
            <Switch>
                <Route exact path={`${path}`} component={NoneDetail} />
                <Route path={`${path}/show/:id`} component={ShowDetail} />
            </Switch>
        </Container>
    );
}
