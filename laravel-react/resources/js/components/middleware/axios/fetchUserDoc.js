import axios from "axios";
import headerConfig from "../headerConfig";
import { _urlGetUserDocuments } from "../apis";

export const fetchUserDoc = async _props => {
    return await axios
        .get(_urlGetUserDocuments(_props.id), headerConfig(_props.token, 3600))
        .then(res => {
            return res.data.success;
        });
};
