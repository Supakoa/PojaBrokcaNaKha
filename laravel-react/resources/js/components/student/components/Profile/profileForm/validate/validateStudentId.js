const validateStudentId = value => {
    const _isNum = false;
    if (isNaN(value)) {
        console.log("if");

        return _isNum;
    } else {
        if (value.length >= 11) {
            return !_isNum;
        }
        return _isNum;
    }
};

export default validateStudentId;
