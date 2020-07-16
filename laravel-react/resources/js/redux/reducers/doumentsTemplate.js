const documentsTemplateReducer = (state = [], action) => {
    switch (action.type) {
        case "DOCUMENT":
            return action.payload;

        default:
            return state;
    }
};

export default documentsTemplateReducer;
