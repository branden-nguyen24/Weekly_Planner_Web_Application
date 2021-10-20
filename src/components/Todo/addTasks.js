import React from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import {listAdd} from '../../redux/actions/listActions'


const AddTasks = (props) => {

    const addTaskStyle = {                  // styling of the addTask
        display: "grid",
        gridTemplateColumns: "50px 150px",
        textAlign: "left",
    }

    const dispatch = useDispatch();
    
    const onSubmit = (event) => {                              // turns off the "add new task" field once a task is added                     
        event.preventDefault();
        if (event.target.job.value) {
            const task = event.target.job.value;
            event.target.job.value = "";
            const taskId = Math.random() * 100000 + 10000;
            dispatch(listAdd(task, taskId, props.id))
        }
        props.addTaskMiddleware();
    }

    return (
        <div style={{ gridColumn: "1/span2" }}>
            <div className="addClass" key={Date.now()}>
                <form onSubmit={onSubmit} style={addTaskStyle}>
                    <input type="checkbox" style={{ marginLeft: 15, marginTop: 6 }} />
                    <input type="text" name="job" required placeholder="To-Do" />
                
                </form>
            </div>
        </div>
    )
}

const mapDispatchtoProps = (dispatch) => {
    console.log("Map Dispatch is called")
    return {
        add: (job, dayOfWeek) => dispatch(listAdd(job, dayOfWeek)),
    }
}

export default connect(null, mapDispatchtoProps)(AddTasks);

