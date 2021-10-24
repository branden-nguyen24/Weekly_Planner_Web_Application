import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { login } from '../../redux/actions/loginAction'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const LoginForm = (props) => {

    const formStyle = {
        margin: 25,
        marginLeft: 0,
        display: "grid",
        gridTemplateColumns: "150px 200px",
        gridGap: "15px"
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const history = useHistory();
    toast.configure();

    const onSubmit = (event) => {
        event.preventDefault();
        if (username === "" || password === "") {            // set an error message
            return;
        }
        // dispatch(login(username,password));

        const userTester = username;
        const passwordTester = password;
        axios.get(`/api/login?username=${userTester}&password=${passwordTester}`)
            .then((response) => {
                if (response.data) {
                    props.login(userTester, response.data, passwordTester);
                    history.push('/')
                } else {
                    toast.warn('username and/or password was incorrect',{position: toast.POSITION.TOP_CENTER})
                }
            })
            
        event.target.username.value = ""
        event.target.password.value = ""
        setUsername("");
        setPassword("");
    }

    return (
        <div>
            <form onSubmit={onSubmit} style={formStyle}>
                <label name="username">Username: </label>
                <input type="text" required name="username" onChange={event => setUsername(event.target.value)}></input>
                <label name="password">Password: </label>
                <input type="password" required name="password" onChange={event => setPassword(event.target.value)}></input>
                <input type="submit" style={{ gridColumn: "2", width: 100, justifySelf: "right" }} value="Login" />
            </form>
        </div>
    )
}

const mapDispatchtoProps = (dispatch) => {
    return {
        login: (username, name, password) => dispatch(login(username, name, password)),
    }
}

export default connect(null, mapDispatchtoProps)(LoginForm)
