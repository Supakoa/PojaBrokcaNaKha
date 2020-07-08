const formReducer = (state = {}, action) => {
    switch (action.type) {
        case "INITFORM":
            return {
                ...state,
                file: action.file,
                ref: action.ref
            }

        case "UPDATEFILE":
            return {
                ...state,
                file : action.file
            }

        case "UPDATEREF":
            return {
                ...state,
                ref: action.ref
            }

        case "DESTROYFORM":
            return {}

        default:
            return state
    }
}

export default formReducer

