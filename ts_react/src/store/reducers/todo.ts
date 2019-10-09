import { handleActions } from 'redux-actions'
import { 
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO
} from '../type/'
import { todoInterface } from "../interface";

const initialState:Array<Object> = []

const todos = handleActions({
  
  [ADD_TODO]: <T>(state:Array<T>, action:any):Array<T> => {
    return [
      ...state,
      {
        ...action.payload,
        completed: false
      }
    ]
  },
  [TOGGLE_TODO]: (state:Array<todoInterface.todoState>, action:any):Array<todoInterface.todoState> => {
    return state.map(todo =>
      (todo.id === action.payload.id)
        ? {...todo, completed: !todo.completed}
        : todo
    )
  }
}, initialState)

export default todos