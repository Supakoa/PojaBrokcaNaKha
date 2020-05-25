import axios from "axios";
import Swal from "sweetalert2";
import axiosError from "./axiosError";

const postToken = async item => {
    const authToken = await axios
        .post(`http://localhost:8000/api/register`, item)
        .then(res => {
            const token = res.data.success.token;
            return { status: true, token: token };
        })
        .catch(error => {
            const _error = axiosError(error);
            return _error;
        });

    return authToken;
};

export default postToken;
