import axios from "axios";
import { _urlGetMessages } from "../apis";
import headerConfig from "../headerConfig";
import Swal from "sweetalert2";

export const getMessages = async _token => {
    const _all = await axios
        .get(_urlGetMessages(), headerConfig(_token, 3000))
        .then(res => {
            return res.data.success;
        })
        .catch(er => {
            Swal.fire("error", er, "error");
        });

    return _all;
};
