import React from 'react'
import Card from './Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'

const Todo = (props) => {

    const todoStyle = {                             // style sheet for the week cards
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        textAlign: "center",
        maxWidth: "100%"
    }


    return (
        <div style={{ textAlign: "center", marginLeft: 50, marginRight: 50 }}>
            <div className="container-fluid todo" style={todoStyle}>

                {props.week.map((day) => <Card key={day.key} id={day.key} />)}
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {

    return { week: state.addDelete.items }
}

export default connect(mapStateToProps)(Todo)
