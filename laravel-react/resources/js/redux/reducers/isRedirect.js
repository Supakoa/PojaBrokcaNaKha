const redirectReducer = (state = false, action) => {
    switch (action.type) {
        case "REDIRECT":
            return action.boolean;
        default:
            return state;
    }
};

export default redirectReducer;
