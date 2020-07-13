const selectFacultyReducer = (state = {}, action) => {
    switch (action.type) {
        case "SELECTFACULTY":
            return {
                ...state,
                id: action.id
            }

        case "CLEARSELECTFACULTY":
            return {
                ...state,
                id: 0
            }

        default:
            return state
    }
}

export default selectFacultyReducer
