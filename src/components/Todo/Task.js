import React from 'react'
import Tasks from './Tasks'

const Task = (props) => {
    return (
        <div>
            <input type="checkbox" />
            <label id="done">{props.job}</label>
        </div>
    )
}

export default Task
