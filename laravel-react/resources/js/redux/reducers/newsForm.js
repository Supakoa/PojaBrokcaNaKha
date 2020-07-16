const newsFormReducer = (state = {}, action) => {
    switch (action.type) {
        case "INIT_NEWS_FORM":
            return {
                ...state,
                file: action.file,
                ref: action.ref
            }

        case "UPDATE_FILE_FORM_NEWS":
            return {
                ...state,
                file : action.file
            }

        case "UPDATE_REF_FORM_NEWS":
            return {
                ...state,
                ref: action.ref
            }

        case "DESTROY_FORM":
            return {}

        default:
            return state
    }
}

export default newsFormReducer

