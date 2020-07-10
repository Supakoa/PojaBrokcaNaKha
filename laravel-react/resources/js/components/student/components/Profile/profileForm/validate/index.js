import validateTitle from "./validateTitle";
import validateEmpty from "./validateEmpty";
import validateStudentId from "./validateStudentId";
import validatePhone from "./validatePhone";
import validateEmail from "./validateEmail";

const validateFaculty = value => {};

const validateMajor = value => {};

export const validateIndex = (name, value) => {
    const _state = false;
    switch (name) {
        case "title":
            return validateTitle(value);
        case "first_name":
            return validateEmpty(value);
        case "last_name":
            return validateEmpty(value);
        case "student_id":
            return validateStudentId(value);
        case "telephone":
            return validatePhone(value);
        case "email":
            return validateEmail(value);
        case "facuty":
            return validateFaculty(value);
        case "major":
            return validateMajor(value);
        default:
            return _state;
    }
};

export default validateIndex;
