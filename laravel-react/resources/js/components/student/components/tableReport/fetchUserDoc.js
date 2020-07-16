import axios from "axios";
import headerConfig from "../../../middleware/headerConfig";
import { _urlGetUserDocuments } from "../../../middleware/apis";

export const fetchUserDoc = async _props => {
    await axios
        .get(_urlGetUserDocuments(_props.id), headerConfig(_props.token, 3600))
        .then(res => {
            _props.dispatch(_props.actionDoc(res.data.success));
            // return res.data.success;
        });
};
