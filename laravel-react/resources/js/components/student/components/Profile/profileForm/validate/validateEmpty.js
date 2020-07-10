const validateEmpty = value => {
    const _isStr = false;
    if (value !== "") {
        return !_isStr;
    }
    return _isStr;
};

export default validateEmpty;
