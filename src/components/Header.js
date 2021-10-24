import React from 'react'
import {connect} from 'react-redux'

const Header = (props) => {
    return (
        <div style={{margin: "50px",}}>
            <h1> ☕ {props.name === "" ? <b>My Homepage</b> : <b> {props.name}'s Homepage</b>} </h1>
            <hr style={{ color: "#bd9f8f", height: 5, margin: 10, marginTop:50 }} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        name: state.login.name
    }
}

export default connect(mapStateToProps)(Header)
