import React from 'react'
import {connect, useDispatch} from 'react-redux'
import saveWeek from '../redux/actions/saveActions'

const Header = (props) => {

    const headerStyle = {
        display:'grid',
        gridTemplateColumns:'75px 1fr 100px'
    }

    const dispatch = useDispatch();
    const onClick = () => {
        console.log("SAVE")
        dispatch(saveWeek(props.username, props.week))
    }

    return (
        <div style={{margin:"50px"}}>
            <h1 style={headerStyle}> 
                <>☕</> 
                <>{props.name === "" ? <b>My Homepage</b> : <b> {props.name}'s Homepage</b>} </>
                <><button onClick={onClick}> save </button> </>
            </h1>
            <hr style={{ color: "#bd9f8f", height: 5, margin: 10, marginTop:50 }} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        name: state.login.name,
        username: state.login.username,
        week: state.addDelete.items
    }
}

export default connect(mapStateToProps)(Header)
