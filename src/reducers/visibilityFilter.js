import * as actions from '../constants/ActionTypes'
import * as filters from '../constants/VisibilityFilters'

const visibilityFilter = (state = filters.SHOW_ALL, action) => {
    switch (action.type) {
        case actions.SET_VISIBILITY_FILTER:
            return action.filter

        default:
            return state
    }
}

export default visibilityFilter