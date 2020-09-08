import axios from "axios";
import { _urlUploads } from "../apis";
import {_URL} from "../URL";

const uploadsReturnFile = async (_data, token) => {
    var formData = new FormData();
    formData.append("image", _data);

    const _path = await axios
        .post(`${_URL}/api/uploadsReturnFile`, formData, {
            headers: {
                "content-type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
                "Retry-After": 3600
            }
        })
        .then(res => {
            return res.data;
        })
        .catch(er => {
            return false;
        });

    return _path;
};

export default uploadsReturnFile;
