import axios from "axios";
import { _urlSubjects } from "../apis";
import headerConfig from "../headerConfig";

export const getSubjects = async _token => {
    return await axios
        .get(_urlSubjects(), headerConfig(_token, 3000))
        .then(res => {
            console.log(res.data);
        });
};
