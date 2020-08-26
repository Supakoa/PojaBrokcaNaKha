const chipGroupReducer = (state = {}, action) => {
    switch (action.type) {
        case "NEW_CHIP_GROUP":
            let chipGroups = new Array()
            chipGroups.length = action.data

            return {
                data: chipGroups
            }

        

        default:
            return state
    }
}

export default chipGroupReducer
