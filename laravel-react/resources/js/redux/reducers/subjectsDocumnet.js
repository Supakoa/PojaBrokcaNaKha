const subjectsDocumentReducer = (state = [], action) => {
    switch (action.type) {
        case "SUBJECTS_DOCUMENT":
            return action.payload;

        default:
            return state;
    }
};

export default subjectsDocumentReducer;
