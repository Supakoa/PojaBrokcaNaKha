const showUsersReducer = (state = {}, action) => {
    switch (action.type) {
        case "INIT_SHOW_USERS":
            return {
                ...state,
                data: action.data
            }

        case "UPDATE_SHOW_USERS":
            return {
                ...state,
                data: action.data
            }

        default:
            return state
    }
}

export default showUsersReducer
