import { _title } from "./template/templateTitle";

const validateTitle = value => {
    const _isValue = false;
    // Loop for Check pattern the Title
    for (let index = 0; index < _title.length; index++) {
        const _patterns = _title[index];
        // Condition Check value equal element
        if (value === _patterns) {
            return !_isValue;
        }
    }
    // return Boolean
    return _isValue;
};

export default validateTitle;
