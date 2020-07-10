const validatePhone = value => {
    var phoneno = /^\d{10}$/;
    if (value.match(phoneno)) {
        return true;
    } else {
        return false;
    }
};

export default validatePhone;
