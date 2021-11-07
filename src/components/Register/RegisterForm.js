import React, { useState } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { registerUser } from '../../redux/actions/registerActions'

const RegisterForm = () => {

    const formStyle = {
        margin: 25,
        marginLeft: 0,
        display: "grid",
        gridTemplateColumns: "150px 200px",
        gridGap: "15px"
    }

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

    toast.configure();
    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        if (password !== conPassword) {
            toast.warn('passwords do not match', { position: toast.POSITION.TOP_CENTER })
            
        } else if(username.indexOf(' ') > 0) {
            toast.warn('username can not have any spaces', { position: toast.POSITION.TOP_CENTER })
        } else {
            dispatch(registerUser(name,username,password))
        }
    }


    return (
        <div>
            <form onSubmit={onSubmit} style={formStyle}>
                <label name="name">Name: </label>
                <input type="text" required name="name" onChange={(event) => setName(event.target.value)}></input>
                <label name="username">Username: </label>
                <input type="text" required name="username" onChange={(event) => setUsername(event.target.value)}></input>
                <label name="password">Password: </label>
                <input type="password" required name="password" onChange={(event) => setPassword(event.target.value)}></input>
                <label name="conPassword">Confirm Password: </label>
                <input type="password" required name="conPassword" onChange={(event) => setConPassword(event.target.value)}></input>
                <input type="submit" style={{ gridColumn: "1", width: 100, justifySelf: "left",  }} value="Cancel" />
                <input type="submit" style={{ gridColumn: "2", width: 100, justifySelf: "right" }} value="Register" />

            </form>
        </div>
    )
}

export default RegisterForm
