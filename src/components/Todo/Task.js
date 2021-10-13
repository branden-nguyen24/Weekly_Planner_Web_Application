import React from 'react'
import { useState } from 'react'

const Task = ({ job, date }) => {

    const taskStyle = {
        display: "grid",
        gridTemplateColumns: "50px 150px",  // adjust this to fit on screen size later
        textAlign: "left",

    }

    const [check, setCheck] = useState(false);

    const onChange = () => {                 // used to add a strike to whichever task is checked off
        setCheck(!check)
    }

    return (
        <div style={taskStyle}>
            <input type="checkbox" onChange={onChange} style={{ marginLeft: 15, marginTop: 6 }} />
            <label style={{ alignSelf: "center" }}>
                {check ? (<strike style={{ opacity: "50%" }}>{job}</strike>) : job}
            </label>

        </div>
    )
}

export default Task
