import React from "react";
import HeaderApprover from "./components/header";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { user } from "../../redux/actions";
import BodyApprover from "./components/body";
import post2User from "../middleware/post2Redux/postToUser";

export default function Approvers() {
    const _dispatch = useDispatch();
    let _history = useHistory();
    const _token = localStorage._authLocal;
    const _user = useSelector(s => s.userState);

    const _props = {
        token: _token,
        role: 2,
        history: _history,
        userId: _user.id,
        dispatch: _dispatch,
        acUser: user
    };

    React.useEffect(() => {
        const abort = new AbortController();

        if (Object.keys(_user).length === 0 && _token) {
            post2User(_props, { signal: abort.signal });
        }
        return () => {
            abort.abort();
        };
    }, [_user]);

    return (
        <div className="w-100" style={{ minHeight: "70vh" }}>
            <HeaderApprover />
            <BodyApprover />
        </div>
    );
}
