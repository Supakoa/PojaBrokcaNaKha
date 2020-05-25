import axios from "axios";
import Swal from "sweetalert2";
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
            Swal.fire("Good job!", "You clicked the button!", "success");
            return { status: true, _role: role, _data: data };
        })
        .catch(error => {
            if (error.response) {
                // Request made and server responded
                return { status: false, error: error.response.data };
            } else if (error.request) {
                // The request was made but no response was received
                // console.log(error.request);
                return { status: false, error: error.request };
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
                return { status: false, error: error.message };
            }
        });
    return userAuth;
};

export default postUser;
