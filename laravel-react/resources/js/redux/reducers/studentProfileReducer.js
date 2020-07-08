const studentProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case "student":
            return action.payload;
        default:
            return state;
    }
};

export default studentProfileReducer;
