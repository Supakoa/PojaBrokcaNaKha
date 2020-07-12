const validateStudentId = value => {
    if (isNaN(value)) {
        // console.log("if");
        return false;
    } else if (value.length >= 11) {
        return true;
    }
    return false;
};

export default validateStudentId;
