export const validateTitle = value => {
    const catagories = ["นาย", "นาง", "นางสาว", "Mr", "Miss"];
};

export const validateFirstname = value => {};

export const validateLastname = value => {};

export const validateStudentId = value => {};

export const validatePhone = value => {};

export const validateEmail = value => {};

export const validateIndex = (name, value) => {
    const _state = false;
    switch (name) {
        case "title":
            const _title = validateTitle(value);
            return _title;
        case "name_f":
            const _firstName = validateFirstname(value);
            return _firstName;

        case "name_l":
            const _lastName = validateLastname(value);
            return _lastName;

        case "student_id":
            const _studentId = validateStudentId(value);
            return _studentId;

        case "phone":
            const _phone = validatePhone(value);
            return _phone;

        case "email":
            const _email = validateEmail(value);
            return _email;

        default:
            return _state;
    }
};
