
import React from 'react'
import { useState } from 'react'
import RideYourWave from '../../src/rideCrop.gif'
import { BsX, BsList } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../redux/actions/loginAction'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useHistory } from 'react-router-dom'
import {resetTask} from '../redux/actions/listActions'

const Sidebar = (props) => {

    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState("-100vw")

    const onClick = () => {
        setVisible(!visible);
        if (parseInt(position)) {
            setPosition("0")
        } else {
            setPosition("-100vw")
        }
    }

    const style = {
        height: "100vh",
        width: "175px",
        backgroundColor: "#D3D3D3",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        left: position,
        zIndex: 100,       // means its over everything
        transition: "650ms",
        alignItems: "center"
    }

    const history = useHistory();

    const handleLogOut = () => {                            // could try to compact this all
        props.logOut();
        onClick();
        props.reset();
        history.push('/login');
        toast.warn('logged out', { position: toast.POSITION.TOP_CENTER });
    }

    return (
        <div >
            <img src={RideYourWave} alt="Logo" style={{ width: "100%", display: "block" }} />

            {!visible && <BsList onClick={onClick} size={35} style={{ position: "fixed", top: 10, left: 12 }} />}
            <div style={style}>
                <BsX size={35} onClick={onClick} style={{ margin: 12, alignSelf: "flex-end" }} />
                <div style={{ margin: 15, cursor: "pointer" }}>
                    <Link to='/' onClick={onClick} style={{ color: "black", fontSize: "25px", textDecoration: "none" }}>home</Link>
                </div>
                <div style={{ margin: 15, cursor: "pointer" }}>
                    {!props.loggedIn
                        ? <Link to='/login' onClick={onClick} style={{ color: "black", fontSize: "25px", textDecoration: "none" }}>login</Link>
                        : <div onClick={handleLogOut} style={{ color: "black", fontSize: "25px", textDecoration: "none" }}>log out</div>
                    }

                </div>
                <div style={{ margin: 15, cursor: "pointer" }}>
                    <Link to='/about' onClick={onClick} style={{ color: "black", fontSize: "25px", textDecoration: "none" }}>about</Link>
                </div>
            </div>


        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.login.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut()),
        reset: () => dispatch(resetTask())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
