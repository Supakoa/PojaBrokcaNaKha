import axios from "axios";
import {_URL} from "../../middleware/URL";

export const _signOut = async _props => {
    await axios
        .post(`${_URL}/api/logout`, _props.token, {
            headers: {
                Authorization: `Bearer ${_props.token}`,
                "Content-Type": "application/json",
                "Retry-After": 3600
            }
        })
        .then(res => {
            if (res.status === 401) {
                console.log("Token false");
            } else {
                _props.dispatch(_props.isAuththen(false));
                _props.dispatch(_props.pathRoleUser("/login"));
                _props.dispatch({ type: "DESTROY" });
                localStorage.removeItem("_authLocal");
                localStorage.removeItem("pathRoleUser");
                _props.history.push("/login");
            }
        })
        .catch(error => {
            localStorage.removeItem("_authLocal");
            localStorage.removeItem("pathRoleUser");
            _props.history.push("/login");
        });
};
