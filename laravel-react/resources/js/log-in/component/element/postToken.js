import axios from "axios";

const postToken = async item => {
    const authToken = await axios
        .post(`http://127.0.0.1:8000/api/register`, item)
        .then(res => {
            const token = res.data.success.token;
            return token;
        })
        .catch(error => {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            const result = confirm(error);

            if (result) {
                return null;
            }
        });

    return authToken;
};

export default postToken;
