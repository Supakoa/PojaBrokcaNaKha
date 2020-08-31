import React from "react";
import { Container } from "react-bootstrap";
import TableApprover from "./tableApprover";
import { useSelector, useDispatch } from "react-redux";
import {
    documentsTemplate,
    subjectsForDocument,
    userDocument,
    allUsers
} from "../../../../redux/actions";
import post2Subjects from "../../../middleware/post2Redux/postToSubjects";
import post2Documents from "../../../middleware/post2Redux/postToDocuments";
import post2UserDocuments from "../../../middleware/post2Redux/postToUserDocuments";

import { Switch, useRouteMatch, Route } from "react-router-dom";
import ShowDetail from "./ShowDetail";
import NoneDetail from "./NoneDetatil";
import FilterSort from "../../../filter";
import post2AllUsers from "../../../middleware/post2Redux/postToUsers";
import MessageElements from "../../../student/components/message";

export const SetRowsTable = React.createContext();

export default function BodyApprover() {
    const { path, url } = useRouteMatch();
    const _dispatch = useDispatch();
    const token = localStorage._authLocal;
    const _userId = useSelector(s => s.userState.id);
    const [_filValid, setFilValid] = React.useState(false);
    const [_sortBy, setSortBy] = React.useState("pending");
    const _optionSort = ["all", "pending", "approved", "rejected", "edited"];
    const [rows, setRows] = React.useState([]);
    let channel = window.Echo.channel("channel-chat");
    channel.listen(".event-chat-user-" + _userId, function(data) {
        console.log(JSON.stringify(data));
    });
    const _props = {
        token: token,
        id: _userId,
        dispatch: _dispatch,
        acDocTemp: documentsTemplate,
        acSubject: subjectsForDocument,
        acUserDocs: userDocument,
        acAllUsers: allUsers
    };

    const setFilterTable = e => {
        const _selected = e.target.name;
        setSortBy(_selected ? _selected : _sortBy);
        setRows(_selected ? [] : rows);
    };

    React.useEffect(() => {
        const abort = new AbortController();
        if (_userId && token) {
            post2UserDocuments(_props, { signal: abort.signal });
            post2Subjects(_props, { signal: abort.signal });
            post2Documents(_props, { signal: abort.signal });
            post2AllUsers(_props, { signal: abort.signal });
        }
        return () => abort.abort();
    }, [_userId, token]);

    return (
        <Container
            className="py-3 mb-3"
            style={{ backgroundColor: "#F1F1F1", minHeight: "90vh" }}
        >
            <FilterSort
                setFilterVaild={setFilValid}
                filterValid={_filValid}
                sortBy={_sortBy}
                setSort={setFilterTable}
                arrayData={_optionSort}
                noti={rows.length}
            />
            <TableApprover
                urlApprover={url}
                sortTable={_sortBy}
                setValidSort={setFilValid}
                validSort={_filValid}
                setSortBy={setSortBy}
                setRows={setRows}
                rows={rows}
            />
            <hr />
            <Switch>
                <Route exact path={`${path}`} component={NoneDetail} />
                <Route path={`${path}/show/:id`}>
                    <ShowDetail setRowsToInit={setRows} />
                </Route>
            </Switch>
            <MessageElements token={token} />
        </Container>
    );
}
