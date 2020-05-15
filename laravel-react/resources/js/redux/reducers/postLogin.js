import axios from "axios";

const postLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case "postLogin":
            const user = {
                email: action.email,
                password: action.password
            };
            const tokenLogin = axios
                .post(`http://localhost:8000/api/login`, user)
                .then(res => {
                    if (res.status === 200) {
                        return res.data.success.token;
                    }
                })
                .catch(error => {
                    const er = () => {
                        const result = confirm("ลองอีกครั้ง.");
                        if (result) {
                            window.location = "/login";
                        }
                    };
                    return er;
                });

               return {...state, tokenLogin}
        default:
            return state
    }
};

export default postLoginReducer;
