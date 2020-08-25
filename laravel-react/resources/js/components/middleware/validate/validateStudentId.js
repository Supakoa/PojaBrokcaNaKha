const validateStudentId = value => {
    if (isNaN(value) || value.length < 11) {
        return false;
    }
    return true;
};

export default validateStudentId;
