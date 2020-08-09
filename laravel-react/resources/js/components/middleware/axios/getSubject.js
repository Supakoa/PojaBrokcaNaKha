import axios from "axios";
import { _urlSubjects } from "../apis";
import headerConfig from "../headerConfig";
import Swal from "sweetalert2";

export const getSubjects = async _token => {
    const _sub = await axios
        .get(_urlSubjects(), headerConfig(_token, 3000))
        .then(res => {
            return res.data;
        })
        .catch(er => {
            Swal.fire("error", er, "error");
        });

    return _sub;
};
