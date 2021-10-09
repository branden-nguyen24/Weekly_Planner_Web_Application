import React from 'react'
import { useState } from 'react'
import Task from './Task'
import TaskList from '../TaskList'

const Tasks = () => {


    const [task, setTasks] = useState(TaskList);

    const [word, setWord] = useState("");

    // const tasks = [
    //     {
    //         job: "finish checkboxes"
    //     }
    // ]

    const addTask = () => {

    }

    const onChange = (event) => {
        //word = event.target.value
        setWord(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        TaskList.push({
            job: event.target.job.value
        })

        setTasks(... task, event.target.job.value);
        console.log(TaskList)
        event.target.job.value = "";

    }

    const [count, setCount] = useState(["hello"]);

    return (
        <div>
            {TaskList.map((task) => ( <Task job={task.job} /> ))}
            <br/>
            <h6>Add task</h6>
            <div className="addClass">
                <button onClick={() => {
                    setCount(count.push())
                    console.log(count)}} />
                    {word}
                <form onSubmit={onSubmit} >
                    <label>Task Name: </label>
                    <input type="text" name="job" onChange={onChange} />
                    <input type="submit" />
                    
                </form>
            </div>
        </div>
    )
}

export default Tasks
