import React from 'react'
import Card from './Card'
import 'bootstrap/dist/css/bootstrap.min.css'

const Todo = ({ Week }) => {

    const todoStyle = {                             // style sheet for the week cards
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        textAlign: "center",
        maxWidth: "100%"
    }

    return (

        <div style={{ textAlign: "center", marginLeft: 50, marginRight: 50 }}>
            <div className="container-fluid todo" style={todoStyle}>

                {Week.map((day) => <Card key={day.key} dayOfWeek={day.name} colora={day.color} taskList={day.tasks} />)}

            </div>
        </div>

    )
}

export default Todo
