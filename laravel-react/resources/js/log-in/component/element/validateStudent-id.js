const validateStudentId = value => {
    if (isNaN(value)) {
        return { status: false, message: "รหัสนักศึกษาต้องเป็นตัวเลข" };
    } else {
        return { status: true };
    }
};

export default validateStudentId;
