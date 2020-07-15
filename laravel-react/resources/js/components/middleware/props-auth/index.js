

export const _propsAuth = _props => {
    return  {
    "dispatch": _props.dispatch,
    "isAuththen": _props.isAuththen,
    "pathRoleUser": _props.pathRoleUser,
    "history": _props.history,
    "token": _props.token,
    "user" :_props.user ? _props.user : null,
    "info" : _props.info ? _props.info : null,
    "setInfo" : _props.setInfo ?  _props.setInfo :null,
    "role" : _props.role }
};

