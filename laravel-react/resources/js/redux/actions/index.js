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

export const isAuththen = boolean => {
    return {
        type: "REDIRECT",
        boolean: boolean
    };
};

export const newsUpload = obj => {
    return {
        type: "UPLOAD",
        image: {
            name: obj.image,
            url: obj.url
        }
    };
};

export const studentProfile = _std => {
    return {
        type: "student",
        payload: _std
    };
};
