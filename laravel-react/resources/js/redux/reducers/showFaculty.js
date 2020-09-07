const showFacultyReducer = (state = {}, action) => {
    switch (action.type) {
        case "INIT_SHOW_FACULTY":
            return {
                ...state,
                data: action.data
            }

        default:
            return state
    }
}

export default showFacultyReducer
