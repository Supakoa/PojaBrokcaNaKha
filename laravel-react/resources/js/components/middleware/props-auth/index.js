export const _propsAuth = _props => {
    return {
        dispatch: _props.dispatch, //require
        isAuththen: _props.isAuththen, //require
        pathRoleUser: _props.pathRoleUser, //require
        history: _props.history, //require
        token: _props.token, //require
        user: _props.user ? _props.user : null,
        info: _props.info ? _props.info : null,
        setInfo: _props.setInfo ? _props.setInfo : null,
        role: _props.role
    };
};
