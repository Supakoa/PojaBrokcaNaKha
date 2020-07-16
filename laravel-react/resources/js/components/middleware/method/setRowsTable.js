export const _setRowsTable = _props => {
    // console.log(_data);
    if (_props.docTemp.length !== 0) {
        for (let i = 0; i < _props.userDoc.length; i++) {
            const _userDoc = _props.userDoc[i];
            for (let j = 0; j < _props.docTemp.length; j++) {
                const _temp = _props.docTemp[j];
                if (_userDoc.form_id === _temp.id) {
                    _userDoc.form_id = _temp.th_name;
                }
            }
            if (_userDoc.created_at) {
                if (_userDoc.created_at !== null) {
                    _userDoc.created_at = _convertDate(
                        _userDoc.created_at
                    ).toUTCString();
                    // console.log(_convertDate(_userDoc.created_at));
                } else {
                    _userDoc.created_at = "-";
                }
            }
            if (_userDoc.updated_at) {
                if (_userDoc.updated_at !== null) {
                    _userDoc.updated_at = _convertDate(
                        _userDoc.updated_at
                    ).toUTCString();
                    // console.log(_convertDate(_userDoc.created_at));
                } else {
                    _userDoc.updated_at = "-";
                }
            }
            if (_userDoc.canceled_at) {
                if (_userDoc.canceled_at !== null) {
                    _userDoc.canceled_at = _convertDate(
                        _userDoc.canceled_at
                    ).toUTCString();
                    // console.log(_convertDate(_userDoc.created_at));
                } else {
                    _userDoc.canceled_at = "-";
                }
            }
            _props.row.push(_userDoc);
        }
    }
};

const _convertDate = _date => {
    return new Date(_date);
};
