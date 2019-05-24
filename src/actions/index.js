import * as types from '../constants/ActionTypes'

export const addTodo = (text, category = 'default') => ({
    type: types.ADD_TODO,
    text,
    category,
})

export const editTodo = (id, text, category) => ({
    type: types.EDIT_TODO,
    id,
    text,
    category,
})

export const deleteTodo = (id) => ({
    type: types.DELETE_TODO,
    id,
})

export const completeTodo = (id) => ({
    type: types.COMPLETE_TODO,
    id,
})

export const completeAllTodos = () => ({
    type: types.COMPLETE_ALL_TODOS,
})

export const clearCompletedTodos = () => ({
    type: types.CLEAR_COMPLETED_TODOS,
})

export const setVisibilityFilter = (filter) => ({
    type: types.SET_VISIBILITY_FILTER,
    filter,
})