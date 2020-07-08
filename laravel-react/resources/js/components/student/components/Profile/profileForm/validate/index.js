import validateTitle from "./validateTitle";

const validateString = value => {};

const validateStudentId = value => {};

const validatePhone = value => {};

const validateEmail = value => {};

export const validateIndex = (name, value) => {
    const _state = false;
    switch (name) {
        case "title":
            const _title = validateTitle(value);
            return _title;
        case "name_f":
            const _firstName = validateString(value);
            return _firstName;

        case "name_l":
            const _lastName = validateString(value);
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
        case "facuty":
            return true;
        case "major":
            return;
        default:
            return _state;
    }
};

export default validateIndex;
