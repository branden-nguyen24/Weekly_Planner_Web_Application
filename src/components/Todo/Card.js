import React from 'react'
import { useState } from 'react'
import Tasks from './Tasks'

const Card = ({ dayOfWeek, colora, taskList, }) => {

    const cardStyle = {
        minHeight: "250px",
    }

    const [tasks, setTasks] = useState(taskList)

    const addTask = (event) => {
        event.preventDefault();

        if (event.target.job.value) {
            const task = event.target.job.value
            event.target.job.value = "";
            console.log(tasks)
            setTasks([...tasks, task]);
        }
    }

    return (
        <div style={cardStyle}>
            <div style={{ backgroundColor: colora, margin: 15, textAlign:"left" }}>
                <b style={{margin:8}}>{dayOfWeek}</b>
            </div>
            <hr style={{ margin: 15 }} />
            <Tasks TaskList={tasks} addTask={addTask} />
        </div>
    )
}

export default Card
