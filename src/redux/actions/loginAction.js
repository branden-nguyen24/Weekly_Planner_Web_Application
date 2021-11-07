import axios from 'axios'
import { userWeek } from '../actions/listActions'

const login = (username, password) => async dispatch => {

    try {
        const res = await axios.get(`/api/login?username=${username}&password=${password}`)
        if (res.data !== 'invalid') {
            console.log("ACTION: USER IS LOGGED IN")
            console.log(res.data)

            dispatch( {
                type: "LOGIN",
                username: username,
                password: password,
                name: res.data
            })
            dispatch(userWeek());
            

        } else {
            console.log("ACTION: ERROR ")
        }
    }
    catch (e) {
        console.log(e)
    }

}

const logOut = () => async dispatch => {

    try {
        await axios.get(`/api/logout`)
        dispatch({
            type: "LOGOUT"
        })
    }
    catch (e) {
        console.log(e)
    }

}

export { login, logOut };