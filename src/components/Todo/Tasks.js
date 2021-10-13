import React from 'react'
import { useState } from 'react'
import Task from './Task'
import AddTaskField from './addTasks'

const Tasks = ({ TaskList, addTask }) => {

    const [addButton, setAddButton] = useState(false);

    const onClick = () => {                                             // this function is if the "add new task" button is pushed            
        setAddButton(!addButton);
    }

    const addTaskMiddleware = (event) => {                              // turns off the "add new task" field once a task is added                     
        setAddButton(false)
        addTask(event);
    }

    return (                                            // returns each individual task
        <div style={{ gridColumn: "1/span2" }}>

            <div style={{ opacity: "50%" }} onClick={onClick}>
                + new task
            </div>

            {TaskList.map((task) => (<Task key={Date.now()} job={task} />))}

            {addButton && <AddTaskField TaskList={TaskList} setTaskList={addTaskMiddleware} />}


        </div>
    )
}

export default Tasks
