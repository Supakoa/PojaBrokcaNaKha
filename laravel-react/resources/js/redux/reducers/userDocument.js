const userDocumentReducer = (state = [], action) => {
    switch (action.type) {
        case "USER_DOCUMENTS":
            return action.payload;

        default:
            return state;
    }
};

export default userDocumentReducer;
