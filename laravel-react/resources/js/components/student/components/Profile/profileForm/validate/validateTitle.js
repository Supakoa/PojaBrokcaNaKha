const validateTitle = value => {
    const _title = ["นาย", "นาง", "นางสาว", "Mr", "Miss"];
    let _isValue;
    // Loop for Check pattern the Title
    for (let index = 0; index < _title.length; index++) {
        const _patterns = _title[index];
        // Condition Check value equal element
        if (value === _patterns) {
            _isValue = true;
        }
        _isValue = false;
    }
    // return Boolean
    return _isValue;
};

export default validateTitle;
