import axios from "axios";
import { _urlCancelDocument } from "../apis";
import headerConfig from "../headerConfig";

const deleteDocument = async (id, token) => {
    return await axios
        .post(_urlCancelDocument(id), {}, headerConfig(token, 3600))
        .then(res => {
            return res.data;
        })
        .catch(er => {
            return er.error;
        });
};

export default deleteDocument;
