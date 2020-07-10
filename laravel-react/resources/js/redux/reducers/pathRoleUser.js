const pathRoleUserReducer = (state = {}, action) => {
    switch (action.type) {
        case "SETPATH" :
            return {
                ...state,
                path: action.data
            };

        default :
            return state;
    }
};
export default pathRoleUserReducer
