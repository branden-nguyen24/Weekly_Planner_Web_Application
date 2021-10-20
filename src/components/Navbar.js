
import React from 'react'
import { useState } from 'react'
import RideYourWave from '../../src/rideCrop.gif'
import { BsX, BsList } from "react-icons/bs"
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState("-100vw")

    const onClick = () => {
        setVisible(!visible);
        if (parseInt(position)) {
            setPosition("0")
            console.log("cliky")
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
        transition: "550ms",
        alignItems:"center"
    }

    return (
        <div >
            <img src={RideYourWave} alt="Logo" style={{ width: "100%", display: "block" }} />
            
            {!visible && <BsList onClick={onClick} size={35} style={{ position: "fixed", top: 10, left: 12 }} />}
            
            <div style={style}>
                <BsX size={35} onClick={onClick} style={{ margin: 12, alignSelf:"flex-end"}} />
                <div style={{ margin: 15, cursor: "pointer" }}>
                    <Link to='/' style={{color:"black",fontSize:"25px",textDecoration:"none"}}>home</Link>
                </div>
                <div style={{ margin: 15, cursor: "pointer" }}>
                <Link to='/login' style={{color:"black",fontSize:"25px",textDecoration:"none"}}>login</Link>
                </div>
                <div style={{ margin: 15, cursor: "pointer" }}>
                <Link to='/about' style={{color:"black",fontSize:"25px",textDecoration:"none"}}>about</Link>
                </div>
            </div>


        </div>
    )
}

export default Sidebar
