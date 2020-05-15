import axios from "axios";

const postLoginReducer = async (state = {}, action) => {
    switch (action.type) {
        case "postLogin":
            const user = {
                email: action.email,
                password: action.password
            };
            const tokenLogin = await axios
                .post(`http://localhost:8000/api/login`, user)
                .then(res => {
                    if (res.status === 200) {
                        return res.data.success.token;
                    }
                })
                .catch(error => {
                    const result = confirm("ลองอีกครั้ง.");
                    if (result) {
                        window.location = "/login";
                    }
                });
            console.log("reducer" + tokenLogin);
            return { ...state, tokenLogin };
        default:
            return state;
    }
};

export default postLoginReducer;
