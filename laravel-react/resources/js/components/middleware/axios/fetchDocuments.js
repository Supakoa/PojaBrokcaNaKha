import axios from "axios";
import { _urlDocuments } from "../apis";
import headerConfig from "../headerConfig";

const fetchDocuments = async _props => {
    await axios
        .get(_urlDocuments(), headerConfig(_props.token, 3600))
        .then(res => {
            // console.log(res.data);
            _props.dispatch(_props.docTemp(res.data));
        });
};

export default fetchDocuments;
