const newsReducer = (state = {}, action) => {
    switch (action.type) {
        case "UPLOAD":
            return {
                ...state,
                ...action.image
            };
        default:
            return { ...state };
    }
};

export default newsReducer;
