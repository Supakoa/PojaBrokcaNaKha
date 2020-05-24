// import axios from "axios";
// import { user, isAuththen } from "../../../redux/actions";

// const postUser = async (tokenRegis, funcs) => {
//     await axios
//         .post(`http://localhost:8000/api/user`, tokenRegis, {
//             headers: {
//                 Authorization: `Bearer ${tokenRegis}`,
//                 "Content-Type": "application/json"
//             }
//         })
//         .then(res => {
//             const role = res.data.success.role_id;
//             const data = res.data.success;
//             console.log(data);

//             // console.log(data);
//             // if (role === 3) {
//             //     const _path = funcs._redirect(role_id);
//             //     localStorage.setItem("_authLocal", tokenUser);
//             //     funcs._history.push(_path);
//             //     funcs._dispatch(isAuththen(true));
//             //     funcs._dispatch(user(data));
//             //     // dispatch(isAuththen(true));
//             //     // dispatch(user(data));
//             // }
//         })
//         .catch(error => {
//             const result = confirm(error);
//             if (result) {
//                 return null;
//             }
//             funcs._setLoad(true);
//         });
// };

// export default postUser;
