import React from 'react'
import {Link,useHistory} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {isAuththen, pathRoleUser} from "../../../redux/actions";

export default function SignOut(props) {

    const token = localStorage._authLocal;
    const dispatch = useDispatch();
    let _history = useHistory();

    const SignOut = async _token => {
         await axios
            .post(`http://localhost:8000/api/logout`, _token, {
                headers: {
                    Authorization: `Bearer ${_token}`,
                    "Content-Type": "application/json",
                    "Retry-After": 3600
                }
            })
            .then(res => {
                if (res.status === 401) {
                    console.log("Token false");
                } else {

                    dispatch(isAuththen(false));
                    dispatch(pathRoleUser("/login"));
                    localStorage.removeItem("_authLocal");
                    localStorage.removeItem("pathRoleUser");
                    _history.push("/login");
                }
            })
            .catch(error => {
                alert(error);
                localStorage.removeItem("_authLocal");
            });
    };


    return (

        <Link
            className= {props.className}
            to="/login"
            onClick={() => SignOut(token)}
        >
            Log-Out
        </Link>
    )
}

