import axios from "axios";
import headerConfig from "../headerConfig";
import { _urlPostDocument } from "../apis";

export const postDocumentUser = async (_token, _data) => {
    return await axios
        .post(_urlPostDocument(), _data, headerConfig(_token, 3000))
        .then(res => {
            console.log(res.data);
        })
        .catch(er => {
            return false
        });
};
