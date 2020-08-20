import axios from "axios";
import { _urlDocuments } from "../apis";
import headerConfig from "../headerConfig";

const fetchDocuments = async token => {
    const _docs = await axios
        .get(_urlDocuments(), headerConfig(token, 3600))
        .then(res => {
            // console.log(res.data);
            return res.data;
        })
        .catch(er => {
            return er.error;
        });
    return _docs;
};

export default fetchDocuments;
