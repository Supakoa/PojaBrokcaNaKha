const selectMajorReducer = (state = 0, action) => {
    switch (action.type) {
        case "SELECTMAJOR":
            return {
                ...state,
                id: action.id
            }

        default:
            return state
    }
}

export default selectMajorReducer
