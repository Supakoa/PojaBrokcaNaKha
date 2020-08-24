import axios from "axios";
import { _urlUploads } from "../apis";

const uploadsImage = async (_data, token) => {
    var formData = new FormData();
    formData.append("image", _data);

    const _path = await axios
        .post(_urlUploads(), formData, {
            headers: {
                "content-type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
                "Retry-After": 3600
            }
        })
        .then(res => {
            console.log(res.data);
            return res.data;
        })
        .catch(er => {
            return false;
        });

    return _path;
};

export default uploadsImage;
