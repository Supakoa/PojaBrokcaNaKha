const userFormReducer = (state = {}, action) => {
    switch (action.type) {
        case "INIT_USER_FORM":
            return {
                ...state,
                email: action.email,
                title: action.title,
                firstName: action.firstName,
                lastName: action.lastName,
                phoneNumber: action.phoneNumber,
                majorId: action.majorId,
                role: action.role
            }

        case "UPDATE_EDIT_FORM_USER_BY_SINGLE_DATA":
            return {
                ...state,
                [action.name]: action.data
            }

        default:
            return state
    }
}

export default userFormReducer
