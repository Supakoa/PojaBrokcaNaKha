import axios from "axios";
import Swal from "sweetalert2";
import headerConfig from "../../middleware/headerConfig";
import { _urlUser } from "../../middleware/apis";
// import { user, isAuththen } from "../../../redux/actions";

const postUser = async tokenRegis => {
    const userAuth = await axios
        .post(_urlUser(), tokenRegis, headerConfig(tokenRegis, 3600))
        .then(res => {
            const { success } = res.data;
            Swal.fire(
                `${success.first_name} ${success.last_name}`,
                "ยินดีตอนรับเข้าสู่ระบบ!",
                "success"
            );
            return { status: true, _role: success.role_id, _data: success };
        });

    return userAuth;
};

export default postUser;
