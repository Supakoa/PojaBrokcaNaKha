import axios from "axios";
import { _urlForms } from "../apis";
import headerConfig from "../headerConfig";

const fetchForms = async token => {
    const _docs = await axios
        .get(_urlForms(), headerConfig(token, 3600))
        .then(res => {
            // console.log(res.data);
            return res.data;
        })
        .catch(er => {
            return er.error;
        });
    return _docs;
};

export default fetchForms;
