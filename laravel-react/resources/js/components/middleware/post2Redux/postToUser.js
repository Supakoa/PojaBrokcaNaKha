import AuthUser from "../axios/User";

const post2User = async _props => {
    const _user = await AuthUser(_props);
    if (_user) {
        _props.dispatch(_props.acUser(_user));
    }
};

export default post2User;