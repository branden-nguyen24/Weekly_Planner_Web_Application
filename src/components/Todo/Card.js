import React from 'react'
import Tasks from './Tasks'
import { connect } from 'react-redux'


const Card = (props) => {

    const cardStyle = {             // set the minimum height for the card
        minHeight: "250px",
    }


    return (
        <div id={props.id} style={cardStyle}>

            <div id={props.id*2} style={{ backgroundColor: props.week.color , margin: 15, textAlign: "left" }}>
                <b style={{ margin: 8 }}>{props.week.name}</b>
            </div>

            <hr style={{ margin: 15, marginBottom: 8 }} />

            <Tasks id={props.id} />
        </div>
    )
}
const mapStateToProps = (state,ownProps) => {
    const { id } = ownProps;
    return { week: state.addDelete.items[id] }
}

export default connect(mapStateToProps)(Card);
