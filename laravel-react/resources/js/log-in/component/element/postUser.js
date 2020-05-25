import axios from "axios";
import Swal from "sweetalert2";
import axiosError from "./axiosError";
// import { user, isAuththen } from "../../../redux/actions";

const postUser = async tokenRegis => {
    const userAuth = await axios
        .post(`http://localhost:8000/api/user`, tokenRegis, {
            headers: {
                Authorization: `Bearer ${tokenRegis}`,
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            const role = res.data.success.role_id;
            const data = res.data.success;
            Swal.fire(
                `${data.first_name} ${data.last_name}`,
                "ยินดีตอนรับเข้าสู่ระบบ!",
                "success"
            );
            return { status: true, _role: role, _data: data };
        })
        .catch(error => {
            const _error = axiosError(error);
            return _error;
        });
    return userAuth;
};

export default postUser;
