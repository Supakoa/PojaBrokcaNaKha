const chipGroupReducer = (state = {}, action) => {
    switch (action.type) {
        case "NEW_CHIP_GROUP":
            let chipGroups = {
                step1: [],
                step2: [],
                step3: [],
                step4: [],
                step5: []
            }

            return {
                data: chipGroups
            }

        case "UPDATE_STEP_1":
            return {
                data: {
                    ...state.data,
                    step1: action.data.sendChip
                }
            }

        case "UPDATE_STEP_2":
            return {
                data: {
                    ...state.data,
                    step2: action.data.sendChip
                }
            }

        case "UPDATE_STEP_3":
            return {
                data: {
                    ...state.data,
                    step3: action.data.sendChip
                }
            }

        case "UPDATE_STEP_4":
            return {
                data: {
                    ...state.data,
                    step4: action.data.sendChip
                }
            }

        case "UPDATE_STEP_5":
            return {
                data: {
                    ...state.data,
                    step5: action.data.sendChip
                }
            }

        default:
            return state
    }
}

export default chipGroupReducer
