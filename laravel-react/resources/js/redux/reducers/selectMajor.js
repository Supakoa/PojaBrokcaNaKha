const selectMajorReducer = (state = {}, action) => {
    switch (action.type) {
        case "SELECT_MAJOR":
            return {
                ...state,
                id: action.id
            }

        default:
            return state
    }
}

export default selectMajorReducer
