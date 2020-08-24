import { getAllUsers } from "../axios/getAllUsers";

const post2AllUsers = async props => {
    const _all = await getAllUsers(props.token);
    if (_all) {
        props.dispatch(props.acAllUsers({ type: "ALL_USERS", payload: _all }));
    }
};

export default post2AllUsers;
