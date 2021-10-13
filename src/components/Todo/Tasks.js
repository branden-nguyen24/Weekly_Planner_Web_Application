import React from 'react'
import { useState } from 'react'
import Task from './Task'
import AddTaskField from './addTasks'

const Tasks = ({ TaskList, addTask }) => {

    const [addButton, setAddButton] = useState(false);
    const onClick = () => {
        setAddButton(!addButton);
    }

    const addTaskMiddleware = (event) => {
        setAddButton(false)
        addTask(event);
    }

    return (                                            // returns each individual task
        <div style={{ gridColumn: "1/span2" }}>
            <div style={{
                display: "grid",
                gridTemplateColumns: "50px 1fr",

            }}>
            </div>
            <div style={{opacity:"50%"}} onClick={onClick}>+ Add Task</div>
            {TaskList.map((task) => (<Task job={task}  />))}
            {addButton && <AddTaskField TaskList={TaskList} setTaskList={addTaskMiddleware}/>}
            
        </div>
    )
}

export default Tasks
