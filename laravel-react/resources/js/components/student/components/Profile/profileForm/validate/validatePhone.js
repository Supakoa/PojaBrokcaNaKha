const validatePhone = value => {
    var phoneno = /^\d{10}$/;
    return value.match(phoneno);
};

export default validatePhone;
