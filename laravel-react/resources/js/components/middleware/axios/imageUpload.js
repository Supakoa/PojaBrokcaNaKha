import axios from "axios";

const imgUpload = () => {
    const _api = "";

    const _upload = axios.post(api, _data, {}).then(res => {
        console.log(res.status);
    });
};

export default imgUpload;
