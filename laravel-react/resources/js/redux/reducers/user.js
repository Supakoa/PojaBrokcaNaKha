const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "USER":
            return {
                ...state,
                ...action.user
            };
        default:
            return { ...state };
    }
};

export default userReducer;
