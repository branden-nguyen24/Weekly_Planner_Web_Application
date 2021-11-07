import axios from 'axios'

const registerUser = (name, username, password) => async dispatch => {
    dispatch({
        type: "REGISTER_LOADING"
    })
    try {
        const response = await axios.post(`/api/register?name=${name}&username=${username}&password=${password}`)
        if (response.data !== 'invalid') {
            console.log("new user created")
            // history.push("/login")
            dispatch({
                type: "REGISTER_SUCCESS"
            })
        } else {
            console.log("username is taken")
            // toast.warn('username is already taken', { position: toast.POSITION.TOP_CENTER })
            dispatch({
                type: "REGISTER_FAILURE",
                error: response.data
            })
        }
    }
    catch (error) {
        console.log(error)
        dispatch({
            type: "REGISTER_FAILURE",
            error: error
        })
    }
}

export { registerUser }

