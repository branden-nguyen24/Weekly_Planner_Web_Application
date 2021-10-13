import React from 'react';

const addTasks = ({ setTaskList }) => {

    const addTaskStyle = {                  // styling of the addTask
        display: "grid",
        gridTemplateColumns: "50px 150px",
        textAlign: "left",
    }

    return (
        <div style={{ gridColumn: "1/span2" }}>
            <div className="addClass" key={Date.now()}>
                <form onSubmit={setTaskList} style={addTaskStyle}>
                   
                    <input type="checkbox" style={{ marginLeft: 15, marginTop: 6 }} />
                    <input type="text" name="job" required placeholder="To-Do" />
                
                </form>
            </div>
        </div>
    )
}

export default addTasks
