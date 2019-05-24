import React from 'react'
import Todo from './Todo'
import './TodoList.scss'

const TodoList = (props) => (
    <ul className="to-do-list">
        {props.todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => {props.actions.completeTodo(index)}} />
        ))}
    </ul>
)

export default TodoList