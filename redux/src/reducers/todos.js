import { handleActions } from 'redux-actions'
import { 
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO
} from '../type/todo'

const initialState = []

const todos = handleActions({
  
  [ADD_TODO]: (state, action) => {
    return [
      ...state,
      {
        ...action.payload,
        completed: false
      }
    ]
  },
  [TOGGLE_TODO]: (state, action) => {
    return state.map(todo =>
      (todo.id === action.payload.id)
        ? {...todo, completed: !todo.completed}
        : todo
    )
  }
}, initialState)

// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       // console.log(action)
//       return [
//         ...state,
//         {
//           ...action.payload,
//           completed: false
//         }
//       ]
//     case 'TOGGLE_TODO':
//       return state.map(todo => (todo.id === action.payload.id)
//           ? {...todo, completed: !todo.completed}
//           : todo
//       )
//     default:
//       return state
//   }
// }

export default todos
