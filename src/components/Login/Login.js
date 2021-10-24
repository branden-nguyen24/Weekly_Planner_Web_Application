import React from 'react'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <div style={{ margin: "50px", }}>
                <h1>  <b>Login</b></h1>
                <hr style={{ color: "#bd9f8f", height: 5, margin: 10, marginTop: 50 }} />
                <LoginForm />
                <Link to='/register' style={{fontSize:13}}>Register here if you don't have an account!</Link>
            </div>
        </div>
    )
}

export default Login
