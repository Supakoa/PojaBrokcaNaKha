import axios from "axios";
import { _urlPostMessage } from "../apis";
import headerConfig from "../headerConfig";
import Swal from "sweetalert2";

export const postMessage = async (_token, data) => {
    const _send = await axios
        .post(_urlPostMessage(), data ,headerConfig(_token, 3000))
        .then(res => {
            return res.data;
        })
        .catch(er => {
            Swal.fire("error", er, "error");
            return undefined;
        });

    return _send;
};
