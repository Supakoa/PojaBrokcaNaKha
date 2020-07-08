const userFormReducer = (state = {}, action) => {
    switch (action.type) {
        case "INITUSERFORM":
            return {
                ...state,
                title: action.title,
                firstName: action.firstName,
                lastName: action.lastName,
                phoneNumber: action.phoneNumber,
                majorId: action.majorId
            }

        default:
            return state
    }
}

export default userFormReducer
