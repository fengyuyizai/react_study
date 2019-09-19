import { VisibilityFilters } from '../actions'
import { handleActions } from 'redux-actions'
import { SET_VISIBILITY_FILTER } from '../type/todo'

const initialState = VisibilityFilters.SHOW_ALL

const visibilityFilter = handleActions({
  [SET_VISIBILITY_FILTER]: (state, action) => {
    return action.payload.filter
  }
}, initialState)

// const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
//   switch (action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return action.payload.filter
//     default:
//       return state
//   }
// }

export default visibilityFilter
