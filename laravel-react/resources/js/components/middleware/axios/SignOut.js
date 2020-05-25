import axios from "axios";

const SignOut = _token => {
    const axiosSignout = _token => {
        axios
            .post(`http://localhost:8000/api/logout`, _token, {
                headers: {
                    Authorization: `Bearer ${_token}`,
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                if (res.status === 401) {
                    console.log("Token false");
                } else {
                    localStorage.removeItem("_authLocal");
                    history.push("/login");
                }
            })
            .catch(error => {
                alert(error);
                localStorage.removeItem("_authLocal");
            });
    };

    return axiosSignout;
};

export default SignOut;
