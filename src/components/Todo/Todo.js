import React, { useEffect } from 'react'
import Card from './Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'
import { resetTask } from '../../redux/actions/listActions'

const Todo = (props) => {

    const todoStyle = {                             // style sheet for the week cards
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        textAlign: "center",
        maxWidth: "100%"
    }

    useEffect(() => {
        if(props.week.length === 0) {
            props.defaultTasks();
        }
    },[])

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
const mapDispatchToProps = (dispatch) => {
    return {
        defaultTasks: () => dispatch(resetTask())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
