const inputTempsReducer = (state = [], action) => {
    switch (action.type) {
        case "INPUTS":
            return action.payload;

        default:
            return state;
    }
};

export default inputTempsReducer;
