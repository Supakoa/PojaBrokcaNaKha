import Swal from "sweetalert2";

const alertResetPassword = status => {
    return Swal.fire(
        status,
        status,
        status == "reset-fail" ? "error" : "success"
    );
};

export default alertResetPassword;
