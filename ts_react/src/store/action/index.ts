import {
    ADD_TODO,
    SET_VISIBILITY_FILTER,
    TOGGLE_TODO
} from '../type/'
import { createAction } from 'redux-actions'
import { todoInterface } from "../interface";

let nextTodoId = 0



export const addTodo = createAction(ADD_TODO, (text: String): todoInterface.todoState => {
    return {
        id: nextTodoId++,
        text
    }
})
export const setVisibilityFilter = createAction(SET_VISIBILITY_FILTER, (filter: any) => {
    return filter
})
export const toggleTodo = createAction(TOGGLE_TODO, (id: number): todoInterface.toggleTodo => {
    return {
        id
    }
})

// export const addTodo = text => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })

// export const setVisibilityFilter = filter => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })

// export const toggleTodo = id => ({
//   type: 'TOGGLE_TODO',
//   id
// })

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
