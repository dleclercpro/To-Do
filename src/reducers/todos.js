import * as actions from '../constants/ActionTypes';

const todos = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_TODO:
            const maxId = state.reduce((maxId, todo) => {
                return Math.max(todo.id, maxId);
            }, -1);

            return [
                ...state,
                {
                    id: maxId + 1,
                    completed: false,
                    text: action.text,
                },
            ];

        case actions.EDIT_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    todo.text = action.text;
                    todo.category = action.category;
                }
                return todo;
            });

        case actions.DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);

        case actions.COMPLETE_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    todo.completed = true;
                }
                return todo;
            });

        case actions.COMPLETE_ALL_TODOS:
            return state.map((todo) => {
                todo.completed = true;
                return todo;
            });

        case actions.CLEAR_COMPLETED_TODOS:
            return state.filter((todo) => !todo.completed);

        default:
            return state;
    }
}

export default todos;