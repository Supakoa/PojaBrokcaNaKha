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
        user: {
            data: obj.data,
            token: obj.token
        }
    };
};

export const isAuththen = boolean => {
    return {
        type: "REDIRECT",
        boolean: boolean
    };
};
