import React from 'react';
import Button from 'react-bootstrap/Button'

const addTasks = ({ setTaskList }) => {

    const addTaskStyle = {
        display: "grid",
        gridTemplateColumns: "50px 10rem",
        textAlign: "left",
    }

    return (
        <div style={{ gridColumn: "1/span2" }}>
            <div className="addClass">
            <form onSubmit={setTaskList} style={addTaskStyle}>
                <input type="checkbox"  style={{marginLeft: 15, marginTop:6 }}/>
                    <input type="text" name="job" required placeholder="To-Do" />
                    {/* <div style={{ textAlign: "right" }}>
                        <Button as="input" type="submit" value="Add!"  />
                    </div> */}
                    </form>
            </div>
        </div>
    )
}

export default addTasks
