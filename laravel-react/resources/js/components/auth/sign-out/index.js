import React from 'react'
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {isAuththen, pathRoleUser,user} from "../../../redux/actions";
import {_signOut} from "./signOut";

export default function SignOutBtn(props) {

    const token = localStorage._authLocal;
    const dispatch = useDispatch();
    let _history = useHistory();

    const _props = {
        "dispatch": dispatch,
        "isAuththen": isAuththen,
        "pathRoleUser": pathRoleUser,
        "user": user,
        "history": _history,
        "token": token
    };


    return (

        <Link
            className={props.className}
            to="/login"
            onClick={() => _signOut(_props)}
        >
            Log-Out
        </Link>
    )
}

