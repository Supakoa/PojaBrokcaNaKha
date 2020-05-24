const validateStudentId = (value, length) => {
    if (isNaN(value)) {
        return { status: false, message: "รหัสนักศึกษาต้แงเป็นตัวเลข" };
    }
};

export default validateStudentId;
