import axios from "axios";

const imgUpload = async _data => {
    const _api = "";

    const _upload = await axios.post(_api, _data, {}).then(res => {
        console.log(res.status);
    });
    return _upload;
};

export default imgUpload;
