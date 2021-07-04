import React from "react";
import { useSelector } from "react-redux";
import findingSender from "../../../middleware/method/findingSender";

const NameSender = ({ id }) => {
    const _allUses = useSelector(s => s.allUsers);
    const [_user, setUser] = React.useState({});

    React.useEffect(() => {
        setUser(findingSender(id, _allUses));
    });
    return (
        <span>{`${_user.title} ${_user.first_name} ${_user.last_name}`}</span>
    );
};

export default NameSender;
