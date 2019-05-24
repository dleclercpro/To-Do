import React from 'react'
import './Filter.scss'

const Filter = (props) => {
    const modifier = props.active ? 'is-active' : ''
    
    return (
        <button
            className={`filter ${modifier}`}
            onClick={(e) => {
                e.preventDefault()
                props.actions.setVisibilityFilter(props.filter)
            }}
        >
            {props.children}
        </button>
    )
}

export default Filter