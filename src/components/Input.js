import React from 'react'
import './Input.scss'

const Input = (props) => {
    let input

    return (
        <form
            className='form'
            onSubmit={(e) => processInput(e, input, props.actions.addTodo)}
        >
            <input className='input' ref={node => { input = node }} placeholder="What needs to be done?" />
        </form>
    )
}

const processInput = (e, node, addTodo) => {
    e.preventDefault()

    // Remove white spaces
    const text = node.value.trim()

    // Text entered
    if (text) {

        // Add to-do
        addTodo(text)

        // Reset input
        node.value = ''
    }
}

export default Input