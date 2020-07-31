import axios from "axios";
import { _urlDocuments } from "../apis";
import headerConfig from "../headerConfig";

const fetchDocuments = async (token, _dispatch, documentsTemplate) => {
    await axios.get(_urlDocuments(), headerConfig(token, 3600)).then(res => {
        // console.log(res.data);
        _dispatch(documentsTemplate(res.data));
    });
};

export default fetchDocuments;
