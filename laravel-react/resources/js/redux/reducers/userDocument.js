const userDocumentReducer = (sate = [], action) => {
    switch (action.type) {
        case "document":
            return action.payload;

        default:
            return state;
    }
};

export default userDocumentReducer;
