import axios from "axios";

const AuthUser = async _token => {
    return await axios
        .post(`http://localhost:8000/api/user`, localStorage._authLocal, {
            headers: {
                Authorization: `Bearer ${localStorage._authLocal}`,
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            const item = res.data.success;
            return item;
        });
};

export default AuthUser;
