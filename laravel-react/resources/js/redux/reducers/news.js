const newsReducer = (state = {}, action) => {
    switch (action.type) {
        case "NEWS_UPLOAD":
            return {
                ...state,
                ...action.image
            };
        default:
            return { ...state };
    }
};

export default newsReducer;
