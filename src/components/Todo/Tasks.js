import React from 'react'
import { useState } from 'react'
import Task from './Task'
import AddTaskField from './addTasks'
import { connect } from 'react-redux'

const Tasks = (props) => {

    const [addButton, setAddButton] = useState(false);

    const onClick = () => {                                             // this function is if the "add new task" button is pushed       
        setAddButton(!addButton);
    }

    const addTaskMiddleware = () => {                              // turns off the "add new task" field once a task is added                     
        setAddButton(false)
    }


    return (                                            // returns each individual task
        <div style={{ gridColumn: "1/span2" }}>

            <div style={{ opacity: "50%" }} onClick={onClick}>
                + new task
            </div>

            {props.tasks.map((task) => (<Task key={props.id*Math.random()} job={task.taskName} taskId={task.id} id={props.id}/>))}

            {addButton && <AddTaskField id={props.id} addTaskMiddleware={addTaskMiddleware}/>}
        </div>
    )
}
const mapStateToProps = (state,ownProps) => {

    const { id } = ownProps;
    return { tasks: state.addDelete.items[id].tasks }
}

export default connect(mapStateToProps)(Tasks);
