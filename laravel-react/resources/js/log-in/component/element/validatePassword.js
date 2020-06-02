const validateConfirmPassword = (_name, _value, _oldValue) => {
    if (_name === "conPassword") {
        if (_oldValue === _value) {
            return { status: true };
        } else {
            return {
                messages: "confirm password not match",
                status: false
            };
        }
    } else {
        return { status: false };
    }
};

export default validateConfirmPassword;
