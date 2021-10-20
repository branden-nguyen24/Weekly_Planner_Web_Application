import React from 'react'
import { useState,  } from 'react'
import { BsX } from 'react-icons/bs'
import { deleteTask } from '../../redux/actions/listActions'
import { useDispatch, connect } from 'react-redux'

const Task = (props) => {

    const taskStyle = {
        display: "grid",
        gridTemplateColumns: "50px 1fr 20px",  // adjust this to fit on screen size later
        textAlign: "left",
    }

    const [check, setCheck] = useState(false);

    const [hover, setHover] = useState(false);

    const onChange = () => {                 // used to add a strike to whichever task is checked off
        setCheck(!check);
    }

    const dispatch = useDispatch();

    return (
        <div style={taskStyle}>
            <input type="checkbox" onChange={onChange} style={{ marginLeft: 15, marginTop: 6 }} />

            <label style={{ alignSelf: "center" }}>
                {check ? (<strike style={{ opacity: "50%" }}>{props.job}</strike>) : props.job}
            </label>

            <BsX onMouseEnter={() => { setHover(true) }}
                onMouseLeave={() => setHover(false)}
                style={hover ? { alignSelf: "center", opacity: "100%" } : { opacity: "0%" }}
                onClick={() => dispatch(deleteTask(props.job, props.taskId, props.id))
                } />
        </div>
    )
}


// style:
const mapDispatchtoProps = (dispatch) => {
    console.log("Map Dispatch is called")
    return {
        delete: (job, dayOfWeek) => dispatch(deleteTask(job, dayOfWeek)),
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log("Map state is called")
    // console.log(state.addDelete.items)
    const { id } = ownProps;
    return { tasks: state.addDelete.items[id].tasks }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Task);