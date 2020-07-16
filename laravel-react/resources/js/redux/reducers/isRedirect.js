const redirectReducer = (state = false, action) => {
    switch (action.type) {
        case "IS_AUTHEN":
            return action.boolean;
        default:
            return state;
    }
};

export default redirectReducer;
