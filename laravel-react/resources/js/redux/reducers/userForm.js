const userFormReducer = (state = {}, action) => {
    switch (action.type) {
        case "INITUSERFORM":
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

        case "UPDATEEDITFORMUSERBYSINGLEDATA":
            return {
                ...state,
                [action.name]: action.data
            }

        default:
            return state
    }
}

export default userFormReducer
