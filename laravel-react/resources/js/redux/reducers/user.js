const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "USER":
            userState = {...state}
            return userState
        default:
            return state
    }
}
