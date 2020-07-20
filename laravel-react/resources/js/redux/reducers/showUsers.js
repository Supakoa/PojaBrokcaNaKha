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
        //     console.log('action.data', action.data)
        //     return state

        default:
            return state
    }
}

export default showUsersReducer
