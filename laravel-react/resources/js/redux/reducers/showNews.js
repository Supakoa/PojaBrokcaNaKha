const showNewsReducer = (state = {}, action) => {
    switch (action.type) {
        case "INIT_SHOW_NEWS":
            return {
                ...state,
                data: action.data
            }

        // case "UPDATE_SHOW_NEWS":
        //     return {
        //         ...state,
        //         [action.name]: action.data
        //     }

        default:
            return state
    }
}

export default showNewsReducer
