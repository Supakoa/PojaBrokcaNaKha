export const textHeader = type => {
    if (type) {
        return "เพิ่มข้อมูล";
    } else {
        return "แก้ไขข้อมูล";
    }
};

export const _validateErrorUSer = (_name, _type) => {
    switch (_type) {
        case "isValid":
            return { [_name]: { [_type]: true } };

        case "isInValid":
            return { [_name]: { [_type]: true } };
        default:
            return (_error = {
                username: { _isInvalid: false, _isValid: false },
                password: { _isInvalid: false, _isValid: false },
                firstName: { _isInvalid: false, _isValid: false },
                lastName: { _isInvalid: false, _isValid: false },
                role: { _isInvalid: false, _isValid: false },
                email: { _isInvalid: false, _isValid: false },
                phone: { _isInvalid: false, _isValid: false },
                major: { _isInvalid: false, _isValid: false },
                faculty: { _isInvalid: false, _isValid: false }
            });
    }
};
