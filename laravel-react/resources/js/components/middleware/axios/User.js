import axios from "axios";
import { _signOut } from "../../auth/sign-out/signOut";
import headerConfig from "../headerConfig";
import { _urlUser } from "../apis";

const AuthUser = async _props => {
    return await axios
        .post(_urlUser(), _props.token, headerConfig(_props.token, 3600))
        .then(res => {
            const item = res.data.success;
            if (item.role_id !== _props.role) {
                // _signOut(_props)
                _props.history.push(localStorage.getItem("pathRoleUser"));
            }
            if (_props.user && _props.dispatch) {
                _props.dispatch(_props.user(item));
            }
            return item;
        })
        .catch(() => {
            _signOut(_props);
        });
};

export default AuthUser;
