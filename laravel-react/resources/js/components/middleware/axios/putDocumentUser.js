import axios from "axios";
import headerConfig from "../headerConfig";
import { _urlPutDocuments } from "../apis";

export const putDocumentUser = async (_token, _data, id) => {
    return await axios
        .put(_urlPutDocuments(id), _data, headerConfig(_token, 3000))
        .then(res => {
            return res.data;
        })
        .catch(er => {
            return er.error;
        });
};
