import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as actions from '../actions'
import * as filters from '../constants/VisibilityFilters'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case filters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)

        case filters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)

        case filters.SHOW_ALL:
            return todos

        default:
            return todos
    }
}

const mapStateToProps =  (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(actions, dispatch),
});

const TodoListContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList)

export default TodoListContainer