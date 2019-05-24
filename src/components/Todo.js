import React from 'react'
import './Todo.scss'

const Todo = (props) => (
    <li
        className={`to-do ${props.completed ? 'done' : ''} ${props.category}`}
        onClick={props.onClick}
    >
        {props.text}
    </li>
)

export default Todo