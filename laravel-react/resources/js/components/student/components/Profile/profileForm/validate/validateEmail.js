const validateEmail = value => {
    const _temp = "@ssru.ac.th";
    let _newTemp;
    let _numID;
    let _isEmail = false;
    const _lengVal = value.length;

    // loop for spilte str match Temp
    for (let i = 0; i < _lengVal; i++) {
        const _str = value[i];
        if (i === 0) {
            // first round check first str equal s ?
            if (_str === "s") {
                _isEmail = true;
            }
            // console.log("first round: ", i);
        } else if (_isEmail) {
            if (i === 1) {
                // console.log("second round: ", i);
                // second round check Student id after the s.
                _numID = value.slice(i, 12);
                if (_numID.length !== 11 || !Number(_numID)) {
                    _isEmail = false;
                }
            } else if (i === _numID.length + 1) {
                // console.log("round: ", i);
                // end to 12 becuese length Student id = 11
                if (_str === "@") {
                    // console.log(i);
                    _newTemp = value.slice(i, _lengVal);
                } else {
                    _isEmail = false;
                }
            }
        }
    }
    // console.log(_newTemp);
    if (_isEmail) {
        if (_temp !== _newTemp) {
            // console.log(_newTemp, " => not Match");
            return !_isEmail;
        }
        return _isEmail;
    } else {
        return _isEmail;
    }
};

export default validateEmail;
