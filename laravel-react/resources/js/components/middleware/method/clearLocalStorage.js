const clearLocalStorage = () => {
    const pathRoleUser = localStorage.getItem("pathRoleUser");
    if (pathRoleUser === null) {
        localStorage.removeItem("_authLocal");
    }
    return pathRoleUser;
};

export default clearLocalStorage;
