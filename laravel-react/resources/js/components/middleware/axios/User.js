import axios from "axios";
import {_signOut} from "../../auth/sign-out/signOut";

const AuthUser = async _props => {
    return await axios
        .post(`http://localhost:8000/api/user`, _props.token, {
            headers: {
                Authorization: `Bearer ${_props.token}`,
                "Content-Type": "application/json",
                "Retry-After": 3600
            }
        })
        .then(res => {
            const item = res.data.success;
            if (item.role_id !== _props.role){
                // _signOut(_props)
                _props.history.push(localStorage.getItem("pathRoleUser"));
            }

            return item;
        }).catch( () => {
            _signOut(_props)
        });
};

export default AuthUser;
