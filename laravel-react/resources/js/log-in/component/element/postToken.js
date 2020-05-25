import axios from "axios";

const postToken = async item => {
    console.log(item);

    const authToken = await axios
        .post(`http://localhost:8000/api/register`, item)
        .then(res => {
            const token = res.data.success.token;
            return { token: token };
        })
        .catch(error => {
            if (error.response) {
                // Request made and server responded
                return { token: null, error: error.response.data };
            } else if (error.request) {
                // The request was made but no response was received
                // console.log(error.request);
                return { token: null, error: error.request };
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
                return { token: null, error: error.message };
            }
        });

    return authToken;
};

export default postToken;
