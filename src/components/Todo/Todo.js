import React from 'react'
import { useState } from 'react'
import Tasks from './Tasks'
import AddTasks from './addTasks.js'
import Card from './Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const Todo = ({ TaskList }) => {

    const [addButton, setAddbutton] = useState(false);
    const [tasks, setTasks] = useState(TaskList);
   

    const onClick = () => {
        setAddbutton(!addButton);
    }

    const week = [
        {
            name: "week goals",
            color: "white",
            tasks: [
            ]
        },
        {
            name: "monday",
            color: "#D5DDE5",
            tasks: [
            ]
        },
        {
            name: "tuesday",
            color: "#FFEBE1",
            tasks: [
            ]
        },
        {
            name: "wednesday",
            color: "#FFF7E7",
            tasks: [

            ]
        },
        {
            name: "thursday",
            color: "#E9F4E6",
            tasks: [

            ]
        },
        {
            name: "friday",
            color: "#E4F2FA",
            tasks: [

            ]
        },
        {
            name: "saturday",
            color: "#F7EEFD",
            tasks: [

            ]
        },
        {
            name: "sunday",
            color: "#FEE9F2",
            tasks: [

            ]
        }
    ]

    const [weekDay, setWeekDay] = useState(week);

    const todoStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        textAlign: "center",
        maxWidth: "100%"
    }

    // const addTask = (event) => {
    //     console.log("click")
    //     event.preventDefault();

    //     if (event.target.job.value) {

    //         const tempWeek = [...week]
    //         console.log(tempWeek);
    //         const task = {
    //             job: event.target.job.value,
    //         }
    //         console.log(event)
    //         event.target.job.value = "";
    //     }

    // }

    return (

        <div style={{textAlign:"center",marginLeft:50,marginRight:50}}>
            <div className="container-fluid todo" style={todoStyle}>
            
            {/* <div style={{ textAlign: "right", margin: 15 }}>
                <Button variant={!addButton ? "success" : "danger"} onClick={onClick} style={{ width: 75 }}>{!addButton ? "Add" : "Close"}</Button>
            </div> */}
            {week.map((day) => <Card dayOfWeek={day.name} colora={day.color} taskList={day.tasks} />)}
            {/* <Tasks TaskList={tasks} />
            {addButton && <AddTasks setTaskList={addTask} />} */}
        </div>
        </div>
        
    )
}

export default Todo
