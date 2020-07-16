const activeMenu = _props => {
    if (_props.path === `/student/${_props.userId}`) {
        _props.setActive(false);
    } else if (_props.path === "/student/form-report") {
        _props.setActive(true);
    }
};

export default activeMenu;
