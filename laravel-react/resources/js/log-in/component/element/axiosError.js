const axiosError = error => {
    if (error.response) {
        // Request made and server responded
        Swal.fire({
            icon: "error",
            title: "ผิดพลาด",
            text: error.response.data
        });
        return { status: false, token: null, error: error.response.data };
    } else if (error.request) {
        // The request was made but no response was received
        // console.log(error.request);
        Swal.fire({
            icon: "error",
            title: "ผิดพลาด",
            text: error.request
        });
        return { status: false, token: null, error: error.request };
    } else {
        Swal.fire({
            icon: "error",
            title: "ผิดพลาด",
            text: error.message
        });
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
        return { status: false, token: null, error: error.message };
    }
};

export default axiosError;
