const selectFacultyReducer = (state = {}, action) => {
    switch (action.type) {
        case "SELECT_FACULTY":
            return {
                ...state,
                id: action.id
            }

        case "CLEAR_SELECT_FACULTY":
            return {
                ...state,
                id: 0
            }

        default:
            return state
    }
}

export default selectFacultyReducer
