import React from "react";
import HeaderChecker from "./components/header";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthUser from "../middleware/axios/User";
import { user } from "../../redux/actions";
import BodyChecker from "./components/body";

export default function Checkers() {
    const _dispatch = useDispatch();
    let _history = useHistory();
    const abort = new AbortController();
    const _token = localStorage._authLocal;
    const _user = useSelector(s => s.userState);

    const _props = {
        token: _token,
        role: 2,
        history: _history,
        userId: _user.id
    };

    const _authen = async _props => {
        const _u = await AuthUser(_props);
        if (_u) {
            _dispatch(user(_u));
        }
    };

    React.useEffect(() => {
        if (Object.keys(_user).length === 0 && _token) {
            _authen(_props, { signal: abort.signal });
        }
    }, [_user, abort]);

    React.useEffect(() => {
        return () => {
            abort.abort();
        };
    }, [abort]);

    return (
        <div className="w-100" style={{ minHeight: "70vh" }}>
            <HeaderChecker />
            <BodyChecker />
        </div>
    );
}
