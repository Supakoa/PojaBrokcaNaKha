const pathRoleUserReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_PATH" :
            return {
                ...state,
                path: action.data
            };

        default :
            return state;
    }
};
export default pathRoleUserReducer
