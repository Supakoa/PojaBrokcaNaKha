import axios from "axios";
import Swal from "sweetalert2";
// import { user, isAuththen } from "../../../redux/actions";

const postUser = async tokenRegis => {
    const userAuth = await axios
        .post(`http://localhost:8000/api/user`, tokenRegis, {
            headers: {
                Authorization: `Bearer ${tokenRegis}`,
                "Content-Type": "application/json",
                "Retry-After": 3600
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
        });

    return userAuth;
};

export default postUser;
