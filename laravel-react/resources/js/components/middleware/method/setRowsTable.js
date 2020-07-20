import _convertDate from "./convertDate";

export const _setRowsTable = async _props => {
    // console.log(_data);
    if (_props.docTemp.length !== 0) {
        const _userDoc = await _props.userDoc.map((user, idx) => {
            // const _nameDoc = _props.docTemp.find(doc => {
            //     if (doc.id === user.form_id) {
            //         return doc.th_name;
            //     }
            // });
            // user.form_id = _nameDoc;

            user.status = _props.statusBadge(user.status, idx);
            // if (user.created_at !== null) {
            //     user.created_at = _convertDate(user.created_at);
            //     // console.log(_convertDate(user.created_at));
            // } else {
            //     user.created_at = "-";
            // }
            // if (user.updated_at !== null) {
            //     user.updated_at = _convertDate(user.updated_at);
            //     // console.log(_convertDate(user.created_at));
            // } else {
            //     user.updated_at = "-";
            // }
            // if (user.canceled_at !== null) {
            //     user.canceled_at = _convertDate(user.canceled_at);
            //     // console.log(_convertDate(user.created_at));
            // } else {
            //     user.canceled_at = "-";
            // }
            if (user.note === null) {
                user.note = "-";
            }
            return user;
            // console.log(user);
        });
        // _props.setRow(_userDoc);
    }
};
