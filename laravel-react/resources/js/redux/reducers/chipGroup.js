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

            let tmpChipGroup
            switch (action.data) {
                case 1:
                    tmpChipGroup = {
                        step1: []
                    }
                    break;
                case 2:
                    tmpChipGroup = {
                        step1: []
                    }
                    break;
                case 3:
                    tmpChipGroup = {
                        step1: []
                    }
                    break;
                case 4:
                    tmpChipGroup = {
                        step1: []
                    }
                    break;
                case 5:
                    tmpChipGroup = {
                        step1: []
                    }
                    break;
            }

            console.log('action.data', action.data)

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
