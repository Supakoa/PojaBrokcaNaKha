import { string } from "prop-types";

export const increment = number => {
    return {
        type: "INCREMENT",
        payload: number
    };
};

export const decrement = number => {
    return {
        type: "DECREMENT",
        payload: number
    };
};

export const user = obj => {
    return {
        type: "USER",
        user: obj
    };
};

export const postLogin = user => {
    return {
        type: "postLogin",
        login:{
            email: user.email,
            password: user.password,
        }
    };
};
