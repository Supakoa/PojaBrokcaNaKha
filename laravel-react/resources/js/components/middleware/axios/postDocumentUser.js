import axios from "axios";
import headerConfig from "../headerConfig";
import { _urlPostDocuments } from "../apis";

export const postDocumentUser = async (_token, _data) => {
    return await axios
        .post(_urlPostDocuments(), _data, headerConfig(_token, 3000))
        .then(res => {
            // console.log(res.data);
            return res.data
        })
        .catch(er => {
            return er;
        });
};
