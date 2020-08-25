import axios from "axios";
import headerConfig from "../headerConfig";
import { _urlPostApprove } from "../apis";

export const postApproveDocument = async (token, data, id) => {
    return await axios
        .post(_urlPostApprove(id), data, headerConfig(token, 3600))
        .then(res => {
            return res.data;
        })
        .catch(er => {
            return er.error;
        });
};
