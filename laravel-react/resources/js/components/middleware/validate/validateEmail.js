const validateEmail = value => {
    return (
        value.indexOf("s") === 0 &&
        value.indexOf("@") === 12 &&
        Number(value.slice(1, 12)) &&
        value.slice(13, value.length) === "ssru.ac.th"
    );
};

export default validateEmail;
