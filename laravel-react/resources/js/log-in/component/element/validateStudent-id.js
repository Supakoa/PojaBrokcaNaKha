const validateId = (value, _name) => {
    if (isNaN(value)) {
        if (_name === 'studentId') {
        return { status: false, message: "รหัสนักศึกษาต้องเป็นตัวเลข" };

        }else{
        return { status: false, message: "เบอร์โทรศัพท์ต้องเป็นตัวเลข" };

        }
    } else {
        return { status: true };
    }
};

export default validateId;
